const Axios = require('axios'),
			OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=e44d05be10ad9fbe1be9b3df64c3c344&units=metric';

module.exports = {
	getTemp:function(location){
			let encodedLocation = encodeURIComponent(location),
					requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
			return Axios.get(requestURL).then(function(success){
				if (success.data.cod && success.data.message) {
					throw new Error(success.data.message);
				}
				else
					{
						return success.data.main.temp
					}
			},function(err){
				throw new Error(err.data.message)
			})
		}
	}