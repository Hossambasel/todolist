let taskList = [];

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value;

    if (taskText) {
        let task = {
            text: taskText,
            completed: false,
        };

        taskList.push(task);

        renderTaskList();
        taskInput.value = "";
    }
}

function renderTaskList() {
    let taskListElement = document.getElementById("taskList");
    taskListElement.innerHTML = "";

    for (let task of taskList) {
        let listItem = document.createElement("li");
        listItem.textContent = task.text;

        if (task.completed) {
            listItem.classList.add("completed");
        }

        listItem.onclick = function () {
            toggleTaskCompletion(task);
        };


        let deleteButton = document.createElement("button");
        deleteButton.textContent = " DELETE";
        deleteButton.style.marginLeft = "10px";
        deleteButton.style.padding = "3px 5px";
        deleteButton.style.border = "none";
        deleteButton.style.borderRadius = "3px";
        deleteButton.style.backgroundColor = "#ff6666";
        deleteButton.style.color = "#fff";
        deleteButton.onclick = function () {
            removeTask(task);
        };

        listItem.appendChild(deleteButton);
        taskListElement.appendChild(listItem);
    }
}

function toggleTaskCompletion(task) {
    task.completed = !task.completed;
    renderTaskList();
}

function removeTask(task) {
    let taskIndex = taskList.indexOf(task);
    if (taskIndex !== -1) {
        taskList.splice(taskIndex, 1);
        renderTaskList();
    }
}
