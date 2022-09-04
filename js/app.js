const API_KEY = `114a11a5e457f25e9528c5dec24e4f2d`;

const loadWeatherApi = async city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    displayWeatherApi( data );
}

// Display the Temparature 
const displayWeatherApi = weather => {
    displayText('temperature', Math.round(weather.main.temp));
    displayText('condition', weather.weather[0].main);
}

const displayText = (id, value) => {
    const loadTemperature = document.getElementById(id);
    loadTemperature.innerText = value;
}

// Display via search 
document.getElementById('search-btn').addEventListener('click', function() {
    const yourCity = document.getElementById('search-field');
    const city = yourCity.value;
    yourCity.value = '';
    document.getElementById('city-name').innerText = city;
    loadWeatherApi(city);
});

document.getElementById('search-field').addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        const yourCity = document.getElementById('search-field');
        const city = yourCity.value;
        yourCity.value = '';
        document.getElementById('city-name').innerText = city;
        loadWeatherApi(city);
    }
});




loadWeatherApi('Dhaka');