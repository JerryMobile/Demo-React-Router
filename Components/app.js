var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var PageA = require('./PageA');
var PageB = require('./PageB');
var PageC = require('./PageC');
var HelloMessage = require('./hello');
var NotFound = require('./NotFound');
var Navigation = require('react-router').Navigation;



var App = React.createClass({
  mixins: [Navigation],
  transitionToPageC: function(){
    this.transitionTo('/PageC');
  },
  render: function() {
    return (
      <div>
        <h1>App</h1>
        <a href="#PageA">Page A</a>            
        <Link to='B'>Page B</Link>  
        <input type='button' onClick={this.transitionToPageC} value='Page C'></input>
        <hr/>
        <RouteHandler/>
      </div>
    )
  }
});

var routes = (
	<Route path='/' handler={App}>
		<Route name="A" path="PageA" handler={PageA}/>
		<Route name="B" path="PageB" handler={PageB}/>
		<Route name="C" path="PageC" handler={PageC}/>
		<NotFoundRoute handler={NotFound} />
		<DefaultRoute  handler={HelloMessage}/>
    </Route>
	);

Router.run(routes, Router.HashLocation, function(Root) {
    React.render(<Root/>, document.getElementById('app'));
});
