// Dark mode toggle script
const button = document.getElementById('theme-btn');
const body = document.body;

function toggleTheme() {
 
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        button.innerText = "Go Light";
    } else {
        button.innerText = "Go Dark";
    }
}
// added an event listener to the button
button.addEventListener('click', toggleTheme);