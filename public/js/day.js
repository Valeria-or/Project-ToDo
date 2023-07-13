const table = document.querySelector(".iksweb")
const idTracker = document.querySelector(".idTracker")

table.addEventListener("click", async (e) => {
    if(e.target.className === 'check'){
        const numberDay = e.target.id
        const tracker = idTracker.parentElement.className
        const checkedDay = e.target.checked
        checkboxBody = {"day" : numberDay, "checked": checkedDay, "tracker_id": tracker}
        
        try {
            const response = await fetch("/tracker/checkbox", {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(checkboxBody)
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