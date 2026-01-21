const tempDisplay = document.getElementById('temperature');
const windDisplay = document.getElementById('wind-speed');
const btn = document.getElementById('refresh-btn');

// API URL (Lagos Coordinates: 6.52, 3.37)

const url = "https://api.open-meteo.com/v1/forecast?latitude=6.5244&longitude=3.3792&current_weather=true";

// ASYNC FUNCTION
async function getWeather() {
    try {
        tempDisplay.innerText = "Loading...";
        
        const response = await fetch(url);
        
        const data = await response.json();
        
        console.log("Data received:", data);

        const temp = data.current_weather.temperature;
        const wind = data.current_weather.windspeed;

        tempDisplay.innerText = `${temp}°C`;
        windDisplay.innerText = `Wind: ${wind} km/h`;

    } catch (error) {
        console.error("Error fetching data:", error);
        tempDisplay.innerText = "Error ⚠️";
    }
}

btn.addEventListener('click', getWeather);
getWeather();