function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        const taskText = document.createTextNode(taskInput.value.trim());
        const deleteButton = document.createElement('button');
        const editButton = document.createElement('button')
        // editButton.innerText = 'Edit'
        editButton.appendChild(document.createTextNode('Edit'));
        deleteButton.appendChild(document.createTextNode('Delete'));
        deleteButton.onclick = function () {
            taskList.removeChild(taskItem);
        }
        editButton.addEventListener('click', function(){
        
        })
        const taskItem = document.createElement('li');
        taskItem.appendChild(taskText);
        taskItem.appendChild(deleteButton);
        taskItem.appendChild(editButton);

        taskList.appendChild(taskItem);
        taskInput.value = '';
    }else{
        alert('Please add a task')
    }
}
