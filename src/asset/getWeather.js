import displayWeather from './displayWeather'
import displayWeather2 from './displayWeather2'
import googleMap from './googleMap';

const getWeather = async (location, unit, status) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${unit}&appid=${process.env.W_API}`);
    const result = await response.json();
    const weather = result.weather[0].id;
    const { country } = result.sys;
    const locationName = result.name;
    const tempC = result.main.temp - 273.15;
    if (status === 'current') {
      displayWeather(result, unit);
    } else {
      const clear = document.getElementById('card2');
      clear.innerHTML = '';
      clear.append(displayWeather2(result, unit));
    }
    const mapDiv = document.getElementById('map');
    //mapDiv.append(googleMap(locationName));
    
  } catch (err) {
    'erorrororo'
    //errorDisplay();
  }
};

export default getWeather;