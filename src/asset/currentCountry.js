import getWeather from './getWeather';
import errorDisplay from './errorDisplay';

const currentCountry = async (unit) => {
  let result;
  try {
    const x = await fetch(`https://ipinfo.io/json?token=${process.env.CURRENT_API}`);
    result = await x.json();
    const { city } = result;
    getWeather(city, unit, 'current');
  } catch (err) {
    errorDisplay();
  }
};

export default currentCountry;