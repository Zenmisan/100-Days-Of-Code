    const calculateScore = (text) => {
    let score = 0;

    // 1. Basic Length Check
    if (text.length > 5) score++;
    if (text.length > 10) score++;

    // 2. Complexity Checks (Regex)
    if (/[0-9]/.test(text)) score++;
    

    if (/[^A-Za-z0-9]/.test(text)) score++;

    return score;
};


const input = document.getElementById('password-input');
const bar = document.getElementById('strength-bar');
const text = document.getElementById('feedback-text');


input.addEventListener('input', () => {
    const val = input.value;
    const score = calculateScore(val);

    // Update UI based on Score (0-4)
    switch(score) {
        case 0:
            bar.style.width = "5%";
            bar.style.backgroundColor = "red";
            text.innerText = "Strength: Very Weak";
            break;
        case 1:
            bar.style.width = "25%";
            bar.style.backgroundColor = "orangered";
            text.innerText = "Strength: Weak";
            break;
        case 2:
            bar.style.width = "50%";
            bar.style.backgroundColor = "gold";
            text.innerText = "Strength: Medium";
            break;
        case 3:
            bar.style.width = "75%";
            bar.style.backgroundColor = "yellowgreen";
            text.innerText = "Strength: Good";
            break;
        case 4:
            bar.style.width = "100%";
            bar.style.backgroundColor = "#00ff88"; // Neon Green
            text.innerText = "Strength: Secure";
            break;
    }
});