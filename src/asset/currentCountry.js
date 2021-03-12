
import getWeather from './getWeather';

const currentCountry = async (unit) => {
  let result;
  try {
    const x = await fetch(`https://ipinfo.io/json?token=${process.env.CURRENT_API}`);
    result = await x.json();
    
    const city = result.city;
    getWeather(city, unit, 'current');
    return result;
  } catch (err) {
    errorDisplay();
  }
}

export default currentCountry;