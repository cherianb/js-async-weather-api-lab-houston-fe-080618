const API_KEY = "b97c0a57be78440bfb553bc4990aa212"

function handleFormSubmit(event) {
  //handle submit event
  event.preventDefault();
  let city=document.querySelector('#city').value.replace(/ /g,'+');
  
  fetchCurrentWeather(city);
}

function fetchCurrentWeather(city) {
  //fetch current weather based on city
  let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appi=${API_KEY}`

  
  
  fetch(url)
  .then(data => data.json())
  .then(convertedData => displayCurrentWeather(convertedData)+console.log(convertedData));
  

function displayCurrentWeather(InputtedData) {
  let temp= document.getElementById('temp');
  let low= document.getElementById('low');
  let high= document.getElementById('high');
  let humidity=document.getElementById('hudmidity');
  let sunrise=document.getElementById('sunrise');
  let sunset = document.getElementById('sunset');
  
  temp.innerHTML = InputtedData.main.temp;
  low.innerHTML = InputtedData.main.temp_min;
  high.innerHTML = InputtedData.main.temp_max;
  hudmidity.innerHTML =InputtedData.main.humidity;
  
}


function fetchFiveDayForecast(city) {
  //fetch five day forecast data based on city
}

function displayFiveDayForecast(json) {
  //render five day forecast data to the DOM using provided IDs and json from API
}

function createChart(json) {
  //Bonus: render temperature chart using five day forecast data and ChartJS
}

document.addEventListener('DOMContentLoaded', function() {
  //add event listener here for form submission
  document.getElementById('cityform'); addEventListener('submit', handleFormSubmit);
  document.getElementById('city').focus()
})
