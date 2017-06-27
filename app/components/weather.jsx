var React = require('react');
var WeatherInputForm = require('WeatherInputForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
	getInitialState: function () {
		return {
			isLoading: false
		}
	},

	handleSearch: function (location) {
		var that = this;

		this.setState({isLoading: true});

		openWeatherMap.getTemp(location).then(function (temp) {
			that.setState({
				location: location,
				temp: temp,
				isLoading: false
			});
		}, function (errorMessage) {
			alert(errorMessage);
			that.setState({isLoading: false});
		});
	},

	render: function () {
		var {location, temp, isLoading} = this.state;

		function renderMessage () {
			if (isLoading) {
				return <h3>Featching weather...</h3>
			} else if (temp && location) {
				return <WeatherMessage location={location} temp={temp} />
			}
		}

		return (
			<div>
				<h3>Weather Component</h3>
				<WeatherInputForm onSearch={this.handleSearch} />
				{renderMessage()}
			</div>
		)
	}
});

module.exports = Weather;