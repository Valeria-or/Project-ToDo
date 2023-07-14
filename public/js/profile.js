const {changeProfile} = document.forms
const divMes = document.querySelector(".message")
console.log("hisdvfadsv")

changeProfile.addEventListener("submit", async (e) => {
    e.preventDefault()
    const data = new FormData(changeProfile)
    const inputs = Object.fromEntries(data)
    if(!inputs.name || !inputs.login){
        divMes.textContent = "Все поля должны быть заполнены"
    } else {
        try {
            const response = await fetch("/profile", {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(inputs)
            })
            const result = await response.json()
            if(result.err){
                divMes.textContent = result.err
            } else {

                // window.location.href = "/profile"
            }
        } catch (error) {
            alert('Чтото совсем всё плохо :((((', error)
        }
    }
})