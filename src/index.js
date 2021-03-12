import './style.css';

import getWeather from './asset/getWeather';
import validate from './asset/validate';
import currentCountry from './asset/currentCountry';

const unit = 'standard';
let city = '';

currentCountry();

const searchBtn = document.getElementById('search');
searchBtn.addEventListener('click', () => {
  city = document.getElementById('city');
  if (validate(city.value) === false) {
    getWeather(city.value, unit, 'search');
  }
});
