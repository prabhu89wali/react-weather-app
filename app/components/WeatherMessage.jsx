const React = require('react'),
			ReactDOM = require('react-dom');

var WeatherMessage = ({temperature,location}) => <h4>It's {temperature} degree celcius in {location}</h4>

module.exports = WeatherMessage;
