import React, { Component, Fragment } from 'react';
import './App.css';

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hand of computer',
    options: []
};

class App extends Component {

    onFormSubmit = (event) => {
        event.preventDefault();

        const option = event.target.elements.option.value;

        if (option) {
            app.options.push(option);
            event.target.elements.option.value = '';
            this.setState({ options: app.options});
        }
    }

    removeAll = () => {
        app.options.length = 0;
        this.setState({ options: app.options});
    }

    render() {
        return (
            <Fragment>
                <h1>{app.title}</h1>
                {app.subtitle && <p>{app.subtitle}</p>}
                <p>{app.options.length > 0 ? 'Here is your options' : 'No options'}</p>
                <p>{app.options.length}</p>
                <ol>
                    <li>Item one</li>
                    <li>Item two</li>
                </ol>
                <form onSubmit={this.onFormSubmit}>
                    <input type='text' name='option'/>
                    <button>Add option</button>
                </form>
                <button onClick={this.removeAll}>Remove All Options</button>
            </Fragment>
        );
    }
}

export default App;
