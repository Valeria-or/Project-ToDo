const {createDeck} = document.forms
const divMes = document.querySelector(".message")
const deleteIcon = document.querySelector(".delete-icon")
const conteinerCards = document.querySelector(".container")

createDeck.addEventListener("submit", async (e) => {
    e.preventDefault()
    const data = new FormData(createDeck)
    const inputs = Object.fromEntries(data)
    if (!inputs.title) {
        divMes.textContent = "Введите название доски!"
      } else {
        try {
            const response = await fetch("/deck", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(inputs)
            })
            const result = await response.json()
            if(result.err){
                divMes.textContent = result.err
            } else {
                window.location.href = "/deck"
            }
        } catch (error) {
            alert('Чтото совсем всё плохо :((((', error)
        }
      }
})

conteinerCards.addEventListener("click", async (e) => {
    const buttonDelete = e.target
    const card = e.target.parentElement.nextElementSibling
    const idCard = card.className
    const conteiner = e.target.parentElement.parentElement.parentElement.parentElement
    if(buttonDelete.className === 'far fa-trash-alt'){
        conteiner.remove()
        cardBody = {"id" : idCard}
        try {
            const response = await fetch("/deck", {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(cardBody)
            })
            const result = await response.json()
            if(result.err){
                alert(result.err) 
            } 
        } catch (error) {
            alert('Чтото совсем всё плохо :((((', error)
        }
    }

})

