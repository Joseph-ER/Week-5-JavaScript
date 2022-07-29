const WeatherApi = require('./index')
const Weather = require('./weather')

describe('Weather Api',() => {
  it('mock test city Bristol and returns weather for bristol', () => {
    const mockedApi = {
      fetchWeatherData: (city, callback)=> {
        callback({
          city: 'Bristol'
        });
      }
    }
    const api = new WeatherApi();
    const weather = new Weather(mockedApi);
    weather.fetch('Bristol');
    expect(weather.getWeatherData()).toEqual({
      city: 'Bristol'
      })
    });
});


// const api = new WeatherApi();
// const weather = new Weather(api);

// weather.fetch('Bristol');

// weather.getWeatherData();