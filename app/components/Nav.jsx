const React = require('react'),
			ReactDOM = require('react-dom'),
			{Link} = require('react-router');

var Nav = React.createClass({
	render:function(){
		return(
				<div>
					<Link to="/">Weather</Link>
					<Link to="/about">About</Link>
					<Link to="/examples">Examples</Link>
				</div>
			)
	}
})

module.exports = Nav;
