import displayWeather from './displayWeather';
import displayWeather2 from './displayWeather2';
import googleMap from './googleMap';
import errorDisplay from './errorDisplay';

const getWeather = async (location, unit, status) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${unit}&appid=${process.env.W_API}`);
    const result = await response.json();
    const locationName = result.name;
    if (status === 'current') {
      displayWeather(result, unit);
    } else {
      const clear = document.getElementById('card2');
      clear.innerHTML = '';
      clear.append(displayWeather2(result, unit));
    }
    const mapDiv = document.getElementById('map');
    mapDiv.innerHTML = '';
    mapDiv.append(googleMap(locationName));
  } catch (err) {
    errorDisplay();
  }
};

export default getWeather;