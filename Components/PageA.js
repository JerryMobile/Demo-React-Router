var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var PageA = React.createClass({
	render: function () {
		return (
			<div>
				<h1>Page A</h1>
				<li><a href="#PageB">Page B</a></li>
				<li><Link to='C'>Page C</Link></li>
			</div>
			
		);
	}
});

module.exports = PageA;