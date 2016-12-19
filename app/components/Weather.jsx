const React = require('react'),
			ReactDOM = require('react-dom'),
			WeatherForm = require('WeatherForm'),
			WeatherMessage = require('WeatherMessage'),
			OpenWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({
	getInitialState() {
		return{
			temperature:'temperature',
			location:'location',
			isLoading:false
		}
	},
	getTemperature:function(cityname){
		let that = this;
		that.setState({
			isLoading:true
		})
		OpenWeatherMap.getTemp(cityname).then(function(temp){
			that.setState({
				isLoading:false, 
				location:cityname,
				temperature:temp 
		})
		},function(err){
			alert(err);
		})
	},
	render:function(){
		let {location,temperature,isLoading} = this.state;
		function renderMessage(){
			if (isLoading) {
				return <h3>Featching Weather...</h3>;
			}
			else if(temperature && location){
				return <WeatherMessage location={location} temperature={temperature}/>;
			}

		}

		return(
				<div>
						<h3>Get Weather</h3>	
						<WeatherForm onSearch={this.getTemperature}/>
						{renderMessage()}
				</div>
			)
	}
})

module.exports = Weather;
