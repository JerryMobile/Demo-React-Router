var React = require('react');
var Navigation = require('react-router').Navigation;


var PageB = React.createClass({
	mixins: [Navigation],
	transitionToC: function(){
		this.transitionTo('/PageC');
	},
	render: function () {
		return (
			<div>
				<h1>Page B</h1>
				<a href="#PageA">Page A</a><br/>
				<input type='button' onClick={this.transitionToC} value='Page C'></input>
			</div>
			
		);
	}
});

module.exports = PageB;