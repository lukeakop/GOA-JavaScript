// Get DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');
const clearAllButton = document.getElementById('clearAll');

// Array to store tasks
let tasks = [];

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText) {
        tasks.push({ text: taskText, completed: false });
        taskInput.value = '';
        renderTasks();
    }
}

// Function to render tasks
function renderTasks() {
    taskList.innerHTML = '';
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox" ${task.completed ? 'checked' : ''}>
            <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
            <button class="delete">Delete</button>
        `;
        
        // Added event listener for checkbox
        const checkbox = li.querySelector('input[type="checkbox"]');
        checkbox.addEventListener('change', function() {
            toggleTaskComplete(i);
        });
        
        // Added event listener for delete button
        const deleteButton = li.querySelector('.delete');
        deleteButton.addEventListener('click', function() {
            deleteTask(i);
        });
        
        taskList.appendChild(li);
    }
}

// Function to toggle task completion
function toggleTaskComplete(index) {
    tasks[index].completed = !tasks[index].completed; //we made false true here
    renderTasks();
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Function to clear all tasks
function clearAllTasks() {
    tasks = [];
    renderTasks();
}

// Add event listeners
addTaskButton.addEventListener('click', addTask);
clearAllButton.addEventListener('click', clearAllTasks);

// Initial render
renderTasks();