
const api = {
    key: "your api key",
    base: "https://api.openweathermap.org/data/2.5/"
}

const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const errMsg = document.querySelector("#error");
const cityName = document.querySelector("#city-name");
const currentDate = document.querySelector("#date");
const icon = document.querySelector(".weather-icon");
const currentTemp = document.querySelector(".temp");
const tempRange = document.querySelector(".temp-range");
const weather = document.querySelector(".weather-current");


btn.addEventListener("click", displayWeather);


async function displayWeather(event) {
    event.preventDefault();

    const inputedCity = getInput(search, errMsg);
    const weatherData = await getData(inputedCity);

    cityName.innerHTML = `${weatherData.name}, ${weatherData.sys.country}`;
    currentDate.innerHTML = getFormattedDate();
    icon.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
    currentTemp.innerHTML = `Temp: ${Math.round(weatherData.main.temp)}°C`;
    tempRange.innerHTML = `Temperature Range: ${Math.round(weatherData.main.temp_min)}°C / ${Math.round(weatherData.main.temp_max)}°C`;
    weather.innerHTML = `Weather: ${weatherData.weather[0].main}`;


}

function getInput(input, errMsg) {
    if(!input.value) {
        errMsg.style.display = "inline";
    } else {
        return input.value;
    }  
}

async function getData(city) {
    const response = await fetch(`${api.base}weather?q=${city}&units=metric&appid=${api.key}`);
    const data = await response.json();
    return data;
}

function getFormattedDate() {

const date = new Date();

// Get day suffix (i.e. "st", "nd", "rd", "th")
const day = date.getDate();
const daySuffix = (day >= 11 && day <= 13) ? 'th' : {1: 'st', 2: 'nd', 3: 'rd'}[day % 10] || 'th';

// Format date as "day suffix Month, Year - Day of the week"
const formattedDate = `${day}${daySuffix} ${new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date)}, ${date.getFullYear()} - ${new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date)}`;

return formattedDate;

}