const imgShow = (status) => {
  var today = new Date();
  var time = today.getHours();
  switch (status) {
    case 'clear sky':
      if (time > 8 && time < 18 ) {
        return 'http://openweathermap.org/img/wn/01d@2x.png'
      } else {
        return 'http://openweathermap.org/img/wn/01n@2x.png'
      }
    case 'few clouds':
      if (time > 8 && time < 18 ) {
        return 'http://openweathermap.org/img/wn/02d@2x.png'
      } else {
        return 'http://openweathermap.org/img/wn/02n@2x.png'
      }

    case 'scattered clouds':
      if (time > 8 && time < 18 ) {
        return 'http://openweathermap.org/img/wn/03d@2x.png'
      } else {
        return 'http://openweathermap.org/img/wn/03n@2x.png'
      }
    case 'broken clouds':
      if (time > 8 && time < 18 ) {
        return 'http://openweathermap.org/img/wn/04d@2x.png'
      } else {
        return 'http://openweathermap.org/img/wn/04n@2x.png'
      }
    case 'shower rain':
      if (time > 8 && time < 18 ) {
        return 'http://openweathermap.org/img/wn/09d@2x.png'
      } else {
        return 'http://openweathermap.org/img/wn/09n@2x.png'
      }
    case 'rain':
      if (time > 8 && time < 18 ) {
        return 'http://openweathermap.org/img/wn/10d@2x.png'
      } else {
        return 'http://openweathermap.org/img/wn/10n@2x.png'
      }
    case 'thunderstorm':
      if (time > 8 && time < 18 ) {
        return 'http://openweathermap.org/img/wn/11d@2x.png'
      } else {
        return 'http://openweathermap.org/img/wn/11n@2x.png'
      }
    case 'snow':
      if (time > 8 && time < 18 ) {
        return 'http://openweathermap.org/img/wn/13d@2x.png'
      } else {
        return 'http://openweathermap.org/img/wn/13n@2x.png'
      }
    case 'mist':
      if (time > 8 && time < 18 ) {
        return 'http://openweathermap.org/img/wn/50d@2x.png'
      } else {
        return 'http://openweathermap.org/img/wn/50dn@2x.png'
      }
  }
  
}
export default imgShow;