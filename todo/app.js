document.addEventListener("DOMContentLoaded", function () {
    // Load tasks from local storage when the page is loaded
    loadTasks();

    // Event listener for adding a new task
    document.getElementById("taskInput").addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a task object
    const task = {
        id: new Date().getTime(),
        text: taskText,
    };

    // Add the task to the UI
    addTaskToUI(task);

    // Save the task to local storage
    saveTask(task);

    // Clear the input field
    taskInput.value = "";
}

function addTaskToUI(task) {
    const tasksContainer = document.getElementById("tasks-container");

    // Create a new task element
    const taskElement = document.createElement("div");
    taskElement.className = "task";
    taskElement.setAttribute("data-id", task.id);  // Add data-id attribute
    taskElement.innerHTML = `
        <span>${task.text}</span>
        <button onclick="deleteTask(${task.id})">Delete</button>
    `;

    // Append the task element to the container
    tasksContainer.appendChild(taskElement);
}

function deleteTask(taskId) {
    // Remove the task from the UI
    document.getElementById("tasks-container").querySelector(`[data-id="${taskId}"]`).remove();

    // Remove the task from local storage
    removeTask(taskId);
}

function saveTask(task) {
    // Get the existing tasks from local storage
    const tasks = getTasks();

    // Add the new task to the array
    tasks.push(task);

    // Save the updated array back to local storage
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeTask(taskId) {
    // Get the existing tasks from local storage
    const tasks = getTasks();

    // Remove the task with the specified ID
    const updatedTasks = tasks.filter(task => task.id !== taskId);

    // Save the updated array back to local storage
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}

function loadTasks() {
    // Get tasks from local storage
    const tasks = getTasks();

    // Add tasks to the UI
    tasks.forEach(task => addTaskToUI(task));
}

function getTasks() {
    // Retrieve tasks from local storage
    const tasksJSON = localStorage.getItem("tasks");

    // Parse the JSON string into an array or return an empty array if null
    return tasksJSON ? JSON.parse(tasksJSON) : [];
}
