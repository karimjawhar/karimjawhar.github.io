// Step 2
const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const weatherInfo = document.getElementById('weatherInfo');

// Step 3
searchBtn.addEventListener('click', function() {
  // Step 4
  const cityName = cityInput.value.trim();
  if (!cityName) {
    alert('Please enter a city name.');
    return;
  }

  // Step 5
  const apiKey = '8f4c1683515e4641661d1b050ca56227';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

  fetch(apiUrl)
    .then(response => {
      // Step 6: Error handling
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // Step 7
      const weatherDescription = data.weather[0].description;
      const mainTemperature = data.main.temp;
      const windSpeed = data.wind.speed;

      // Update weather info div
      weatherInfo.innerHTML = `
        <p>Weather: ${weatherDescription}</p>
        <p>Temperature: ${mainTemperature} K</p>
        <p>Wind Speed: ${windSpeed} m/s</p>
      `;
    })
    .catch(error => {
      // More detailed error handling
      if (error instanceof TypeError) {
        alert('Network error. Please check your internet connection.');
      } else {
        alert(`Error: ${error.message}`);
      }
    });
});
