import { calculateArea, calculateCircumference, PI } from '/Day%2022/geometry.js';

// 1.DOM Elements
const input = document.getElementById('radius');
const output = document.getElementById('output');
const areaBtn = document.getElementById('calc-area');
const circBtn = document.getElementById('calc-circ');

// 2. Event Handlers
areaBtn.addEventListener('click', () => {
    const r = parseFloat(input.value);
    if (isNaN(r)) return;

    // Use the imported function
    const area = calculateArea(r);
    output.innerText = `Area: ${area.toFixed(2)}`;
});

circBtn.addEventListener('click', () => {
    const r = parseFloat(input.value);
    if (isNaN(r)) return;

    // Use the imported function
    const circ = calculateCircumference(r);
    output.innerText = `Circumference: ${circ.toFixed(2)}`;
});

console.log(`Using PI value: ${PI}`);