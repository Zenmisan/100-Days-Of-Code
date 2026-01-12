//  Dya 11. THE DATA (Array)
const blackKnights = [
    "Zero (Leader)",
    "Kallen (Ace Pilot)",
    "Ohgi (Deputy)",
    "Tamaki (Finances... kinda)",
    "Diethard (Media)",
    "Rakshata (Science)"
];

// 2. THE ELEMENTS
const listContainer = document.getElementById('roster-list');
const button = document.getElementById('load-btn');

// 3. THE FACTORY FUNCTION
function generateList() {

    listContainer.innerHTML = "";

    // THE LOOP (The Magic)
    for (let member of blackKnights) {
        // A. Creates a new HTML element
        let newItem = document.createElement('li');
        
        // B. Add content to it
        newItem.innerText = member;
        
        // C. Put it on the page (Append)
        listContainer.appendChild(newItem);
        
        console.log("Added:", member); 
    }
}

// 4. THE TRIGGER / event listner
button.addEventListener('click', generateList);