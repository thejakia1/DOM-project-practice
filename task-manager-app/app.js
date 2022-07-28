const inputTask = document.getElementById("inputTask");
const addTaskBtn = document.getElementById("addTask");
const taskContainer = document.getElementById("taskContainer");

addTaskBtn.addEventListener("click", function() {
    let tasklist = document.createElement('p');
    tasklist.classList.add('tasklist-styling');
    tasklist.innerHTML = inputTask.value;
    taskContainer.appendChild(tasklist);
    inputTask.value = '';
    
})