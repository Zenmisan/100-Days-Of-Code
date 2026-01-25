import Task from './Tasks.js';
import Store from './Storage.js';

// DOM Elements
const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const list = document.getElementById('task-list');
const stats = document.getElementById('stats');

// 1. RENDER UI
function displayTasks() {
    const tasks = Store.getTasks();
    
    // Update Stats
    const completedCount = tasks.filter(t => t.completed).length;
    stats.innerText = `${tasks.length} Tasks | ${completedCount} Completed`;

    // Clear List
    list.innerHTML = '';

    // Render List
    tasks.forEach(task => {
        const li = document.createElement('li');
        if(task.completed) li.classList.add('completed');

        li.innerHTML = `
            <span>${task.title}</span>
            <div class="actions">
                <button class="btn-check" data-id="${task.id}">✓</button>
                <button class="btn-delete" data-id="${task.id}">✕</button>
            </div>
        `;
        list.appendChild(li);
    });
}

// 2. ADD TASK
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = input.value;
    if(title === '') return;

    const task = new Task(title); // Create Instance
    Store.addTask(task);          // Save to DB
    displayTasks();               // Update UI
    input.value = '';
});

// 3. HANDLE CLICKS (Event Delegation)
list.addEventListener('click', (e) => {
    // If they clicked the Delete Button
    if(e.target.classList.contains('btn-delete')) {
        const id = Number(e.target.getAttribute('data-id'));
        Store.removeTask(id);
        displayTasks();
    }

    // If they clicked the Check Button
    if(e.target.classList.contains('btn-check')) {
        const id = Number(e.target.getAttribute('data-id'));
        Store.toggleTask(id);
        displayTasks();
    }
});

// Init
displayTasks();