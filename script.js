const options = {
    method: "GET",
    headers: {
        "x-rapidapi-key": "6274a9667emsh68ab6dbba6f01c6p1d9b1ajsnc6976e5d9f0b",
        "x-rapidapi-host": "weather-by-api-ninjas.p.rapidapi.com",
    },
};

const getWeather = (city) => {
    document.getElementById('cityName').innerHTML = city;
    fetch(
        `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`,
        options
    )
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
            document.getElementById('feels_like').innerHTML = response.feels_like;
            document.getElementById('humidity').innerHTML = response.humidity;
            document.getElementById('max_temp').innerHTML = response.max_temp;
            document.getElementById('min_temp').innerHTML = response.min_temp;
            document.getElementById('sunrise').innerHTML = response.sunrise;
            document.getElementById('sunset').innerHTML = response.sunset;
            document.getElementById('temp').innerHTML = response.temp;
            document.getElementById('wind_degrees').innerHTML = response.wind_degrees;
            document.getElementById('wind_speed').innerHTML = response.wind_speed;
        })
        .catch((error) => {
            console.error('Error fetching weather data:', error);
        });
}

document.getElementById('submit').addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(document.getElementById('city').value);
});

getWeather("Delhi");
