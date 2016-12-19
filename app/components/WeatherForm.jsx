const React = require('react'),
			ReactDOM = require('react-dom');

var WeatherForm = React.createClass({
	formHandler:function(e){
		let cityname = this.refs.cityname.value;
		this.props.onSearch(cityname);
		e.preventDefault();
	},
	render:function(){
		return(
				<div>
					<form onSubmit={this.formHandler}>
						<input type="text" ref="cityname" placeholder="Enter city name"/>
						<button>Get Weather</button>
					</form>
				</div>
			)
	}
})

module.exports = WeatherForm;
