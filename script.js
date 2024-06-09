function addTodoItem() {
    const inputElement = document.getElementById('new-todo-item')
    const inputElementValue = inputElement.value

    

    const todoListElement = document.getElementById('todo-list')
    const listItem = document.createElement('li')
    listItem.textContent = inputElement.value

    todoListElement.appendChild(listItem)

    const inputElementValue = ''


}