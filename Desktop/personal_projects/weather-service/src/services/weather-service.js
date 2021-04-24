const fetch = require('node-fetch');

async function getForecast() {

  const response = await fetch('https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,minutely,current,alerts&units=imperial&appid={API Key}');
  const body = await response.json();

  const result = body.daily.map(day => {
    return {
      dayOfWeek: new Date((day.dt)*1000).toLocaleDateString('en-US', {weekday: 'long'}),
      maxTemp: day.temp.max,
      minTemp: day.temp.min,
      weatherDescription: day.weather[0].main
    }});
  console.log(result);

  return result;
}

module.exports = getForecast;