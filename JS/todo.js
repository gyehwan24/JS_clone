const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
// == document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newToDo);
}

function paintToDo(newToDo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newToDo;
    toDoList.appendChild(li);
}

toDoForm.addEventListener("submit", handleToDoSubmit);