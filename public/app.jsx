var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('./components/Greeter.jsx');

var firstName = 'Justin';


ReactDOM.render(
    <Greeter name={firstName}/>,
    document.getElementById('app')
  );
