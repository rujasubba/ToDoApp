const todoList = []

function addTodoItem() {
    const inputElement = document.getElementById('new-todo-item')
    const inputElementValue = inputElement.value

    const newTodoItem = {
        text: inputElementValue,
        completed: false
    }

   todoList.push(newTodoItem) 

   updateTodoList()

   function updateTodoList(){
    const todoListElement = document.getElementById('todo-list')

    todoListElement.innerHTML = ''
    
    for(const item of todoList){
        const listItem = document.createElement('li')
        listItem.textContent = item.text

        listItem.addEventListener('click', () => {
            // console.log("it has been clicked")
            listItem.classList.add('completed')

        } )

    

        todoListElement.appendChild(listItem)

    }


    
   }

    


 

}