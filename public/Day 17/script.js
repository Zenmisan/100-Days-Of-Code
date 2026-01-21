// Global weather 
// 1. SELECT ELEMENTS
const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const cityNameDisplay = document.getElementById('city-name');
const tempDisplay = document.getElementById('temperature');
const descDisplay = document.getElementById('description');

// 2. FUNCTION A: FIND THE CITY (Geocoding)
async function getCityCoordinates() {
    const city = cityInput.value;
    
    if (!city) return; // Stop if empty

    // Loading State
    cityNameDisplay.innerText = "Searching...";

    try {
        // API CALL #1: Get Lat/Lon from Name
        const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`;
        const response = await fetch(geoUrl);
        const data = await response.json();

        // Check if city exists
        if (!data.results) {
            cityNameDisplay.innerText = "City not found 😕";
            tempDisplay.innerText = "--";
            return;
        }

        // EXTRACT COORDINATES
        const { latitude, longitude, name, country } = data.results[0];
        
        // Update Name on UI
        cityNameDisplay.innerText = `${name}, ${country}`;

        // PASS THE BATON: Call Function B with these coordinates
        getWeatherData(latitude, longitude);

    } catch (error) {
        console.error("Geocoding Error:", error);
        cityNameDisplay.innerText = "Error fetching city.";
    }
}

// 3. FUNCTION B: GET THE WEATHER (Forecast)
async function getWeatherData(lat, lon) {
    try {
        // API CALL #2: Get Weather from Lat/Lon
        const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
        const response = await fetch(weatherUrl);
        const data = await response.json();

        const temp = data.current_weather.temperature;
        const wind = data.current_weather.windspeed;

        // Update UI
        tempDisplay.innerText = `${temp}°C`;
        descDisplay.innerText = `Wind Speed: ${wind} km/h`;

    } catch (error) {
        console.error("Weather Error:", error);
    }
}

// 4. LISTENERS
searchBtn.addEventListener('click', getCityCoordinates);

// event listeners are very helpfu: Allowed for pressing "Enter" key to register as search
cityInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') getCityCoordinates();
});