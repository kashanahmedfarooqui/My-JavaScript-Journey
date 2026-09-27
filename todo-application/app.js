var todoConatiner = document.getElementById("todo-container");
var addTodoButton = document.getElementById("add-todo-button");

// addTodoButton.addEventListener('click', addTodo);

addTodoButton.addEventListener('click', addTodo)

document.removeEventListener('click', addTodo);


function deleteTodo(event){
    var todoItem = event.parentNode;
    todoConatiner.removeChild(todoItem);
}


function editTodo(event){
    var todoItem = event.parentNode;

    var todoTextEle = todoItem.querySelector(".todo-text");

     var todoInput = document.getElementById("todo-input");
    var todoText = todoInput.value;

    todoTextEle.innerText = todoText;

     todoInput.value = "";

}

function addTodo(){
    var todoInput = document.getElementById("todo-input");
    var todoText = todoInput.value;


    if(todoText === ""){
        alert("Please enter a task");
        return;
    }


    var newTodo = document.createElement("div");
    newTodo.setAttribute("class", "todo-item");

    var todoTextEle = document.createElement("p");
    todoTextEle.setAttribute("class", "todo-text");
    todoTextEle.innerText = todoText;

    var deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "del-btn");
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener('click', function(){
        deleteTodo(this);
    })


    var editBtn = document.createElement("button");
    editBtn.setAttribute("class", "edit-btn");
    editBtn.innerText = "Edit";

    editBtn.addEventListener('click', function(){
        editTodo(this);
    })

    newTodo.appendChild(todoTextEle);
    newTodo.appendChild(editBtn);
    newTodo.appendChild(deleteBtn);

    console.log(newTodo);

    todoConatiner.appendChild(newTodo);

    todoInput.value = "";


}

// ==========================================================================================

var todoConatiner = document.getElementById("todo-container");
var addTodoButton = document.getElementById("add-todo-button");
var todoInput = document.getElementById("todo-input");

var todos = [];

addTodoButton.addEventListener("click", addTodo);

function deleteTodo(id){
    for(var i = 0; i < todos.length; i++){
        if(todos[i].id === id){
            todos.splice(i,1);
        }
    }
    renderTodos();
}

function editTodo(id){
    var newTask = prompt("Edit your task");

    for(var i = 0; i < todos.length; i++){
        if(todos[i].id === id){
            todos[i].task = newTask;
        }
    }
    renderTodos();
}

function addTodo(){

    var todoText = todoInput.value;

    if(todoText === ""){
        alert("Please enter a task");
        return;
    }

    var todoObject = {
        id: new Date().getTime(),
        task: todoText
    };

    todos.push(todoObject);

    renderTodos();

    todoInput.value = "";
}

function renderTodos(){

    todoConatiner.innerHTML = "";

    for(var i = 0; i < todos.length; i++){

        var newTodo = document.createElement("div");
        newTodo.setAttribute("class", "todo-item");

        var todoTextEle = document.createElement("p");
        todoTextEle.setAttribute("class", "todo-text");
        todoTextEle.innerText = todos[i].task;

        var deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";

        deleteBtn.addEventListener("click", function(id){
            return function(){
                deleteTodo(id);
            }
        }(todos[i].id));

        var editBtn = document.createElement("button");
        editBtn.innerText = "Edit";

        editBtn.addEventListener("click", function(id){
            return function(){
                editTodo(id);
            }
        }(todos[i].id));

        newTodo.appendChild(todoTextEle);
        newTodo.appendChild(editBtn);
        newTodo.appendChild(deleteBtn);

        todoConatiner.appendChild(newTodo);
    }
}

var todoConatiner = document.getElementById("todo-container");
var addTodoButton = document.getElementById("add-todo-button");
var todoInput = document.getElementById("todo-input");

var tasksArray = []; 

function addTodo() {
    var todoText = todoInput.value;

    if (todoText === "") {
        alert("Please enter a task");
        return;
    }

    var taskObject = {
        text: todoText
    };

    tasksArray.push(taskObject);
    todoInput.value = "";
    renderTasks();
}

function renderTasks() {
    todoConatiner.innerHTML = ""; 

    for (var i = 0; i < tasksArray.length; i++) {
        var newTodo = document.createElement("div");
        newTodo.setAttribute("class", "todo-item");

        var todoTextEle = document.createElement("p");
        todoTextEle.setAttribute("class", "todo-text");
        todoTextEle.innerText = tasksArray[i].text;

        var deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.setAttribute("onclick", "deleteTodo(" + i + ")");

        var editBtn = document.createElement("button");
        editBtn.innerText = "Edit";
        editBtn.setAttribute("onclick", "editTodo(" + i + ")");

        newTodo.appendChild(todoTextEle);
        newTodo.appendChild(editBtn);
        newTodo.appendChild(deleteBtn);

        todoConatiner.appendChild(newTodo);
    }
}

function deleteTodo(index) {
    tasksArray.splice(index, 1); 
    renderTasks(); 
}

function editTodo(index) {
    var updatedValue = prompt("Edit your task:", tasksArray[index].text);
    
    if (updatedValue !== null && updatedValue !== "") {
        tasksArray[index].text = updatedValue; 
        renderTasks();
    }
}

addTodoButton.addEventListener('click', addTodo);