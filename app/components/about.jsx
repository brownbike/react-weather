var React = require('react');

var About = (props) => {
	return (
		<div>
			<h1 className="text-center">About</h1>
			<p>A weather app that uses React</p>
			<ul>
				<li>
					<a href="https://facebook.github.io/react/">React</a>
				</li>
				<li>
					<a href="https://openweathermap.org/">Openweathermap</a>
				</li>
			</ul>
		</div>
	)
};

module.exports = About;
