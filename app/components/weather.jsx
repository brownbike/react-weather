var React = require('react');
var WeatherInputForm = require('WeatherInputForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
	getInitialState: function () {
		return {
			isLoading: false
		}
	},

	handleSearch: function (location) {
		var that = this;

		this.setState({
			isLoading: true,
			errorMessage: undefined
		});

		openWeatherMap.getTemp(location).then(function (temp) {
			that.setState({
				location: location,
				temp: temp,
				isLoading: false
			});
		}, function (e) {
			that.setState({
				isLoading: false,
				errorMessage: e.message
			});
		});
	},

	render: function () {
		var {location, temp, isLoading, errorMessage} = this.state;

		function renderMessage () {
			if (isLoading) {
				return <h3 className="text-center">Featching weather...</h3>
			} else if (temp && location) {
				return <WeatherMessage location={location} temp={temp} />
			}
		}

		function renderError () {
			if (typeof errorMessage === 'string') {
				return <ErrorModal />
			}
		}

		return (
			<div>
				<h1 className="text-center">Get Weather</h1>
				<WeatherInputForm onSearch={this.handleSearch} />
				{renderMessage()}
				{renderError()}
			</div>
		)
	}
});

module.exports = Weather;
