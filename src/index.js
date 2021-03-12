import './style.css';

import {
  Loader
} from "@googlemaps/js-api-loader"

import getWeather from './asset/getWeather'
import validate from './asset/validate'
import currentCountry from './asset/currentCountry'
//import initMap from './asset/initMap'

let unit = 'standard';
let city = '';
let degree = '';
let coords = '';

currentCountry();


const searchBtn = document.getElementById('search');
searchBtn.addEventListener('click', () => {
  city = document.getElementById('city');
  if (validate(city.value) === false) {
    console.log('entre despues de validation')
  getWeather(city.value, unit, 'search')
}
})


