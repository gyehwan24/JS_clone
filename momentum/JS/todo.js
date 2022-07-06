const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");    // == toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");
const TODOS_KEY = "todos";
let toDos = [];

function ToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),  //setting random value
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

function paintToDo(newToDoObj){
    const li = document.createElement("li");
    li.id = newToDoObj.id;

    const span = document.createElement("span");
    span.innerText = newToDoObj.text;

    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function deleteToDo(event){ 
    const li = event.target.parentElement;  //retrun event's parent element
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));  //filter = 조건에 맞는 새로운 배열을 만들어 돌려줌
    saveToDos();
}

function saveToDos(){
    //JSON.stringify(..) ==> make string
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

toDoForm.addEventListener("submit", ToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);    //JSON.parse(..) ==> make array
    toDos = parsedToDos;  //restore previous todo-list
    parsedToDos.forEach(paintToDo);
}