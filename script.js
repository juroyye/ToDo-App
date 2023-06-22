// bring in elements from todo list
const from = document.getElementById('form');
const input = document.getElementById('input');
const todoUL = document.getElementById('todos');

from.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(e)
})

 function addTodo(todo){
    let todoText = input.value

if(todoText) {
    todoText = todo.text
}

if(todoText) {
    const todoEL = document.createElement('li');

    // if there is a todo AND it is completed
    if(todo && todo.completed) {
        todo.classList.add('completed')
    }
   // make the text of li the same as the input value
    todoEL.innerText = todoText;
   // append the todo li item to the todo unordered 
    todoUL.appendChild(todoEL);
}
 }
