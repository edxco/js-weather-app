import './style.css';

import getWeather from './asset/getWeather';
import validate from './asset/validate';
import currentCountry from './asset/currentCountry';
import checkUnit from './asset/checkUnit';

const unit = 'standard';
let city = '';
let status;

currentCountry();

const searchBtn = document.getElementById('search');
searchBtn.addEventListener('click', () => {
  city = document.getElementById('city');
  if (validate(city.value) === false) {
    getWeather(city.value, unit, 'search');
  }
});

const btnSwitch = document.getElementById('btnSwtich');
btnSwitch.addEventListener('change', () => { checkUnit(status); });
