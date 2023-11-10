<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather App</title>
</head>
<body>

    <input type="text" id="cityInput" placeholder="Enter city name">
    <button id="searchBtn">Get Weather</button>
    <div id="weatherInfo"></div>

    <script>
        // Step 1: Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
        const apiKey = '8f4c1683515e4641661d1b050ca56227';

        // Step 2: Create variables
        const cityInput = document.getElementById('cityInput');
        const searchBtn = document.getElementById('searchBtn');
        const weatherInfo = document.getElementById('weatherInfo');

        // Step 3: Add event listener to the button
        searchBtn.addEventListener('click', () => {
            // Step 4: Get the value of the input field
            const city = cityInput.value.trim();

            // Check if the city input is empty
            if (city === '') {
                alert('Please enter a city name.');
                return;
            }

            // Step 5: Make an HTTP request to OpenWeatherMap API
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

            fetch(apiUrl)
                .then(response => {
                    // Step 6: Error handling
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    // Step 7: Update weather info div
                    const weatherDescription = data.weather[0].description;
                    const mainTemperature = data.main.temp;
                    const windSpeed = data.wind.speed;

                    weatherInfo.innerHTML = `
                        <p>Weather: ${weatherDescription}</p>
                        <p>Temperature: ${mainTemperature} K</p>
                        <p>Wind Speed: ${windSpeed} m/s</p>
                    `;
                })
                .catch(error => {
                    console.error('Error:', error.message);
                    // Additional error handling can be done here
                    alert('An error occurred. Please try again later.');
                });
        });
    </script>

</body>
</html>
