const { addDelo } = document.forms;
const idCard = document.querySelector("#idCard");
const list = document.querySelector("#ul");
const input = document.querySelector("#addText");
// const body = document.querySelector("#body");
const no = document.querySelector("#no")

addDelo.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log("hi");
  const todoAll = document.querySelectorAll(".todo");
  console.log(todoAll)
  let todoId
  if(todoAll.length === 0){
    todoId = 0;
  } else {
    todoId = todoAll[todoAll.length - 1].id;
  }
  
  const numbetTodoId = Number(todoId);
  const data = new FormData(addDelo);
  const inputs = Object.fromEntries(data);
  const id = idCard.className;
  const p = {"title": inputs.title, "id": id}
  if (!inputs.title) {
    alert("Введите что-нибудь");
  } else {
    try {
      const response = await fetch(`/list/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(p),
      });
      const result = await response.json();
      console.log(result)
      if (result.err) {
        alert(result.err);
      } else {
        const newToDo = `
            <li class="todo" id=${result.mes}>
            ${inputs.title}
            <span class="delete-icon">
            <i class="far fa-trash-alt"></i>
            </span>
            </li>
            `;

        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = newToDo;

        list.appendChild(tempDiv.firstElementChild);

        no.textContent = ''
        input.value = "";
      }
    } catch (error) {
      alert("Чтото совсем всё плохо :((((", error);
    }
  }
});

list.addEventListener("click", async (e) => {
    const buttonDelete = e.target
    if(buttonDelete.className === 'far fa-trash-alt'){
        const todo = buttonDelete.parentElement.parentElement
        todo.remove()
        const todoId = todo.id
        const todoJson = {"id": todoId}
        try {
            const response = await fetch("/list/onelist", {
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
                //  alert('Чтото совсем всё плохо :((((', error)
            }
    }
})