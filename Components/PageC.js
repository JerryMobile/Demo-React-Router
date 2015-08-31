var React = require('react');

var PageC = React.createClass({
	render: function () {
		return (
			<div>
				<h1>Page C</h1>
				<a href="#PageA">Page A</a><br/>
				<a href="#PageB">Page B</a>
			</div>
			
		);
	}
});

module.exports = PageC;