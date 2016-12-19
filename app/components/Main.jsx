const React = require('react'),
			ReactDOM = require('react-dom'),
			Nav = require('Nav'),
			Weather = require('Weather');

var Main = React.createClass({
	render:function(){
		return(
				<div>
					<Nav/>
					<h1>Main Component</h1>
					{this.props.children}
				</div>
			)
	}
})

module.exports = Main;
