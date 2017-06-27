var React = require('react');

var WeatherMessage = ({location, temp}) => {
	return (
		<div>
			<h3 className="output">It's {temp} in {location} Today!</h3>
		</div>
	)
};

module.exports = WeatherMessage;
