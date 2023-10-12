document.addEventListener('DOMContentLoaded', function () {
    const apiKey = '03e23f86a9385fe9c13d6e03be255557';
    const getWeatherButton = document.getElementById('get-weather-button');
    const cityNameInput = document.getElementById('city-input');
    const cityNameDisplay = document.getElementById('city-name');
    const temperatureDisplay = document.getElementById('temperature');
    const descriptionDisplay = document.getElementById('description');

    getWeatherButton.addEventListener('click', function () {
        const city = cityNameInput.value;
        if (city) {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
                .then(response => response.json())
                .then(data => {
                    cityNameDisplay.textContent = `City: ${data.name}`;
                    temperatureDisplay.textContent = `Temperature: ${data.main.temp}°C`;
                    descriptionDisplay.textContent = `Description: ${data.weather[0].description}`;
                })
                .catch(error => {
                    console.error('Error:', error);
                    cityNameDisplay.textContent = 'City not found';
                    temperatureDisplay.textContent = '';
                    descriptionDisplay.textContent = '';
                });
        } else {
            cityNameDisplay.textContent = 'Please enter a city name';
            temperatureDisplay.textContent = '';
            descriptionDisplay.textContent = '';
        }
    });
});
