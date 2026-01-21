// 1. SELECT ELEMENTS
const loginForm = document.getElementById('login-form');
const successMessage = document.getElementById('success-message');
const usernameInput = document.getElementById('username');
const welcomeText = document.getElementById('welcome-text');
const logoutBtn = document.getElementById('logout-btn');

// 2. THE LOGIN FUNCTION
loginForm.addEventListener('submit', (event) => {
    // Stop the browser from refreshing!
    event.preventDefault();

    // Get the user's name
    const user = usernameInput.value;

    // Update the welcome text 
    welcomeText.innerText = `Welcome, ${user}!`;

    // Swap the UI: Hide Form, Show Success
    loginForm.classList.add('hidden');
    successMessage.classList.remove('hidden');
    
    console.log("Login successful for:", user);
});

// 3. THE LOGOUT FUNCTION 
logoutBtn.addEventListener('click', () => {
    // Swap the UI back
    successMessage.classList.add('hidden');
    loginForm.classList.remove('hidden');
    
    // Clear the inputs
    loginForm.reset();
});