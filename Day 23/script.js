// 1. THE DATA (its hardcodded i know ^_^)
const assets = [
    { id: "bitcoin", name: "Bitcoin", price: 45000, quantity: 0.5, change24h: 2.5 },
    { id: "ethereum", name: "Ethereum", price: 3200, quantity: 2, change24h: -1.2 },
    { id: "solana", name: "Solana", price: 110, quantity: 15, change24h: 5.8 },
    { id: "doge", name: "Dogecoin", price: 0.15, quantity: 10000, change24h: -4.5 }
];

// 2. DOM ELEMENTS
const container = document.getElementById('asset-list');
const totalDisplay = document.getElementById('total-value');
const btnAll = document.getElementById('show-all');
const btnGainers = document.getElementById('show-gainers');
const btnLosers = document.getElementById('show-losers');

// 3. HELPER: Format Currency
const toUSD = (num) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(num);


// 4. RENDER FUNCTION 
function renderList(data) {
    container.innerHTML = ""; // Clear current list

    // --- MAP (Transform Data to HTML) ---
    data.forEach(coin => {
        const totalValue = coin.price * coin.quantity;
        const isProfit = coin.change24h >= 0;
        
        const html = `
            <div class="asset-card ${isProfit ? 'green' : 'red'}">
                <div>
                    <strong>${coin.name}</strong>
                    <br><small>${coin.quantity} units</small>
                </div>
                <div style="text-align:right">
                    <strong>${toUSD(totalValue)}</strong>
                    <br><small style="color:${isProfit ? '#2ecc71' : '#e74c3c'}">
                        ${coin.change24h}%
                    </small>
                </div>
            </div>
        `;
        container.innerHTML += html;
    });

    // --- REDUCE (Calculate Total Net Worth) ---
    // acc = Accumulator (Starts at 0)
    // current = The current coin in the loop
    const totalWealth = data.reduce((acc, current) => {
        return acc + (current.price * current.quantity);
    }, 0);

    totalDisplay.innerText = toUSD(totalWealth);
}


// 5. EVENT LISTENERS (The Filters)

// Show All
btnAll.addEventListener('click', () => {
    renderList(assets);
});

// Show Gainers (FILTER)
btnGainers.addEventListener('click', () => {
    // Logic: Keep coin ONLY IF change24h is positive
    const winners = assets.filter(coin => coin.change24h > 0);
    renderList(winners);
});

// Show Losers (FILTER)
btnLosers.addEventListener('click', () => {
    // Logic: Keep coin ONLY IF change24h is negative
    const losers = assets.filter(coin => coin.change24h < 0);
    renderList(losers);
});

// Initial Render
renderList(assets);