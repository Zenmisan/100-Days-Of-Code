console.log("Hello from the script file!");

// 2. VARIABLES: Storing data
const myName = "Zenmisan"; // String
let currentDay = 10;       // Number
let isLearning = true;     // Boolean

console.log("Student:", myName);
console.log("Day:", currentDay);
console.log("Is learning JavaScript:", isLearning);

// 3. CALCULATIONS: Area of a circle

const pi = 3.14159;
let radius = 15;

// logic: Area = pi * r^2
let area = pi * (radius * radius);

console.log("The radius is:", radius);
console.log("The area is:", area);

// 4. INTERACTION: Popups
alert("Welcome back, " + myName);

// 5. REASSIGNMENT
// Tomorrow is a new day, so we change the variable
currentDay = currentDay + 1;
console.log("Tomorrow will be Day:", currentDay);

// ERROR TEST (the below dosentt run, just for demonstration)
// pi = 3; // Error: Assignment to constant variable.