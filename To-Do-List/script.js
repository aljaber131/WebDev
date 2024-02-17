function addTask(){
    const taskInput= document.getElementById('taskInput');
    const taskList= document.getElementById('taskList');
    const taskText =taskInput.value.trim();
    console.log(taskText);
    if(taskText !=''){
        const li =document.createElement('li');
        li.addEventListener('click',completeTask);
        const editBtn=document.createElement('button')
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click',editTask);
        li.appendChild(editBtn);
        li.textContent = taskText;
        taskList.appendChild(li);
        taskInput.value='';
    }
}

function completeTask(event){
    const task = event.target;
    task.classList.toggle('completed');
}

function editTask(event){
    const task = event.target.innerHTML;
    itemInput=task.createElement("input");
    itemInput.type= 'text';
    itemInput.value =item;
    event.target.parentNode.prepend(itemInput);
    event.target.remove();
    itemInput.select();
}
