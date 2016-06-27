var React = require('react');
var GreeterMessage = require('./GreeterMessage.jsx');
var GreeterForm = require('./GreeterForm.jsx');

// Greeter component
var Greeter = React.createClass({
    getDefaultProps: function() {
        return {name: 'React', message: 'This is from the component.'};
    },
    getInitialState: function() {
        return {name: this.props.name, message: this.props.message};
    },
    handleNewData: function(updates) {
        this.setState(updates);

    },
    render: function() {
        var name = this.state.name;
        var message = this.state.message;
        return (
            <div>
                <GreeterMessage name={name} message={message}/>
                <GreeterForm onNewData={this.handleNewData}/>
            </div>
        );
    }
});

module.exports = Greeter;
