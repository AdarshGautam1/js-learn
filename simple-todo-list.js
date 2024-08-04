const todoList = [{
    listItem: '',
    date: ''
}
];

function renderToDoList(){
    let innerToDoHTML = '';
    for (let i = 0; i < todoList.length; i++){
        let todo =` 
            <div>${todoList[i]['listItem']}</div>
            <div>${todoList[i]['date']}</div>
            <button onclick='
                todoList.splice(${i}, 1);
                renderToDoList();
            ' class='del-btn'>Delete</button>
        `;
        innerToDoHTML += todo;
    }

    //console.log(innerToDoHTML);

    document.querySelector('.to-do-output').innerHTML = innerToDoHTML;
}

function addTodo(){
    const inputElement = document.querySelector('.to-do-input');
    const dateInput = document.querySelector('.dateInput');

    const listItem = inputElement.value;
    const date = dateInput.value;

    if (inputElement.value != ''){

        todoList.push(
            {
                listItem,
                date
            }
        )

        renderToDoList();

    }

    


    //console.log(todoList)
    inputElement.value = '';

    
}