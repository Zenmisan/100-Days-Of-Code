// --- PART 1: PURE LOGIC  ---

// Formula: A = P + (P * r * t)
const calculateSimpleInterest = (p, r, t) => {
    const interest = p * (r / 100) * t;
    const total = p + interest;
    return total;
};

// Formatting currency (e.g. turning 50000 into "₦50,000.00")
const formatCurrency = (amount) => {
    return "₦" + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};


// --- PART 2: DOM INTERACTION  ---

const btn = document.getElementById('calc-btn');
const output = document.getElementById('total-output');

btn.addEventListener('click', () => {
    // 1. Get Values
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const time = parseFloat(document.getElementById('years').value);

    // 2. Validation (Basic)
    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        alert("Please enter valid numbers in all fields.");
        return; // Stop the function here
    }

    // 3. Call the Logic Function
    const result = calculateSimpleInterest(principal, rate, time);

    // 4. Update UI
    output.innerText = formatCurrency(result);
});