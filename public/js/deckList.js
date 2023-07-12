const {addDelo} = document.forms
const idCard = document.querySelector("#idCard")
const list = document.querySelector("#list")
const input = document.querySelector("#addText")
const body = document.querySelector("#body")

addDelo.addEventListener("submit", async (e) => {
    e.preventDefault()
    console.log("hi")
    const data = new FormData(addDelo)
    const inputs = Object.fromEntries(data)
    const id = idCard.className
    if (!inputs.body) {
        alert("Введите что-нибудь")
      } else {
        try {
            const response = await fetch(`/deck/${id}`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(inputs)
            })
            const result = await response.json()
            if(result.err){
                alert(result.err)
            } else {
            const newToDo = `
            <div class="todo">
              <input type="checkbox" class="check"/>
              <span class="text">${inputs.body}</span>
              <span class="delete-icon">
                <i class="far fa-trash-alt"></i>
              </span>
            </div>`;
          
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = newToDo;
          
          list.appendChild(tempDiv.firstElementChild);
          
          input.value = '';
            }
        } catch (error) {
            alert('Чтото совсем всё плохо :((((', error)
        }
      }
})
body.addEventListener("click", async (e) => {
    console.log(e.target)
    console.log(e.target.parentElement.parentElement)
    const buttonDelete = e.target
    if(buttonDelete.className === 'far fa-trash-alt'){
        const todo = buttonDelete.parentElement.parentElement
        todo.remove()
        const todoId = todo.id
        const todoJson = {"id": todoId}
        console.log(todoId)
        try {
            const response = await fetch("/deck/todo", {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(todoJson)
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