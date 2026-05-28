// const API_KEY = "b2a628a1e470c2a94f644ee2a7846c8b";

// async function getWeather() {
//   const cityName = document.getElementById("cityName").value.trim();

//   const { latitude, longitude } = await getGeoLocation(cityName);

//   const WEATHER_API ="https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY} ";

//   const response = await fetch(WEATHER_API);
//   const data = await response.json();

//   const temperature = data.main.temp - 273.15;
//   const city = data.name;

//   document.getElementById("city").innerText = city;

//   document.getElementById("temperature").innerText = temperature.toFixed(2);
// }

// async function getGeoLocation(city) {
//   const GEO_LOC_API = "http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}";
//   const response = await fetch(GEO_LOC_API);
//   const data = await response.json();

//   console.log(data);

//   const latitude = data[0].lat;
//   const longitude = data[0].lon;

//   return { latitude, longitude };
// }

// script.js

const API_KEY = "b2a628a1e470c2a94f644ee2a7846c8b";

async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();

  if (city === "") {
    alert("Please enter city name");
    return;
  }

  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  const response = await fetch(API_URL);

  const data = await response.json();

  if (data.cod != 200) {
    alert("City not found ");
    return;
  }

  const temp = (data.main.temp - 273.15).toFixed(1);

  const weather = data.weather[0].description;

  const humidity = data.main.humidity;

  const wind = data.wind.speed;



  document.getElementById("cityName").innerText = "City : "+data.name;

  document.getElementById("temp").innerText = temp;

  document.getElementById("weatherType").innerText = weather;

  document.getElementById("humidity").innerText = humidity;

  document.getElementById("wind").innerText = wind;
}

document
  .getElementById("cityInput")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      getWeather();
    }
  });
