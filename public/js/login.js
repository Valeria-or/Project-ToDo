const form = document.querySelector(".loginForm")
const divMes = document.querySelector(".message")

form.addEventListener("submit", async (e) => {
    e.preventDefault()
    const data = new FormData(form)
    const inputs = Object.fromEntries(data)
    if(!inputs.login || !inputs.password){
        divMes.textContent = "Все поля должны быть заполнены"
    } else {
        try {
            const response = await fetch("/login", {
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
                window.location.href = "/home"
            }
        } catch (error) {
            alert('Чтото совсем всё плохо :((((', error)
        }
    }
})