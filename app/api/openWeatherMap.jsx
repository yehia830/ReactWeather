const axios = require('axios');

const OPEN_WEATHER_MAP_URL='http://api.openweathermap.org/data/2.5/weather?appid=f87ff71d5e9548bf8a45dc407ea4d896&units=imperial';

//d275123cea1c7b8e4a58a192a48fe30f

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location)
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      }else{
        return res.data.main.temp;
      }
    },function () {
      throw new Error('Error: Location Not Found');
    });
  }
}
