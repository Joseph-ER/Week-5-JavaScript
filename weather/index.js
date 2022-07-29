const apiKey = require('./apiKey');
let city = null;
const got = require('got');

let weather = null;

class WeatherApi{
  constructor(){
    this.apiKey = apiKey;
  }

  fetchWeatherData(city,callbackFunction) {
    let url =`http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${this.apiKey}`
    got(url).then((response)=>{
      let WeatherData = JSON.parse(response.body);
      return WeatherData;
      // console.log(WeatherData.main.temp);
      // console.log(WeatherData.weather[0].main);
    });
    
    console.log('Requesting weather data');
  }

}

module.exports = WeatherApi;
// const api = new WeatherApi();

// api.fetchWeatherData('London', (weatherData) => {
//   console.log(weatherData);
// });