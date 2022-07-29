const WeatherApi = require('./index');

class Weather{

  constructor(api){
    this.api = (api)
  }

  fetch(city){
    this.api.fetchWeatherData(city, (weatherData) => {
      this.weatherData = weatherData;
      console.log(weatherData);
    })
  }

  getWeatherData(){
    return this.weatherData;
  }
}


module.exports = Weather;
