// 1. SELECT ELEMENTS
const input = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('task-list');
const clearBtn = document.getElementById('clear-btn');

// 2. LOAD DATA (The Memory)
// Try to get data from storage. If it's null (first time), use an empty array []
let tasks = JSON.parse(localStorage.getItem('myTasks')) || [];

// 3. RENDER FUNCTION 
// This draws the list based on the 'tasks' array
function renderTasks() {
    list.innerHTML = ""; // Clear current HTML
    
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerText = task.text;
        
        // If task is completed, add class
        if (task.completed) {
            li.classList.add('done');
        }

        // Add Click Listener to toggle completion
        li.addEventListener('click', () => toggleTask(index));

        list.appendChild(li);
    });
}

// 4. ADD TASK
function addTask() {
    const text = input.value;
    if (text === "") return;

    // Create Task Object
    const newTask = {
        text: text,
        completed: false
    };

    tasks.push(newTask);
    saveAndRender();
    input.value = ""; 
}

// 5. TOGGLE TASK (Check/Uncheck)
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed; // Flip true/false
    saveAndRender();
}

// 6. SAVE FUNCTION 
function saveAndRender() {
    // Save to Local Storage (Convert Array to String)
    localStorage.setItem('myTasks', JSON.stringify(tasks));
    // Update the screen
    renderTasks();
}

// 7. CLEAR ALL
clearBtn.addEventListener('click', () => {
    tasks = []; // Clear array
    saveAndRender(); // Save empty array
});

// LISTENERS
addBtn.addEventListener('click', addTask);
// Allow pressing Enter
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});

// INITIAL RENDER (On Page Load)
renderTasks();