const React = require('react'),
			ReactDOM = require('react-dom');

var WeatherMessage = React.createClass({
	render:function(){
		let {temperature,location} = this.props;
		return(
				<div>
						<h4>It's {temperature} degree celcius in {location} </h4>					
				</div>
			)
	}
})

module.exports = WeatherMessage;
