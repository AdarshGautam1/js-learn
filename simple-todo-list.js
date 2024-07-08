const todoList = []

renderToDoList();

function renderToDoList(){
    let innerToDoHTML = '';
    for (let i = 0; i < todoList.length; i++){
        let todo = `<p>${todoList[i]}</p>`;
        innerToDoHTML += todo;
    }

    //console.log(innerToDoHTML);

    document.querySelector('.to-do-output').innerHTML = innerToDoHTML;
}

function addTodo(){
    const inputElement = document.querySelector('.to-do-input');
    const value = inputElement.value;
    todoList.push(value);
    //console.log(todoList)
    inputElement.value = '';

    renderToDoList();
}