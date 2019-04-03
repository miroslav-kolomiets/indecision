import React, { Component } from 'react';
import './App.css';

let count = 0;

class Counter extends Component {

  addOne = () => {
    console.log(count)
    count++;
    this.setState({ inputValue: count });
  }
  
  removeOne = () => {
    console.log(count)
    count--;
    this.setState({ inputValue: count });
  }
  
  reset = () => {
    console.log(count)
    count = 0;
    this.setState({ inputValue: count });
  }
  
  render() {
    return (
      <div className="Counter">
        <h1>Count: {count}</h1>
        <button onClick={this.addOne}>+1</button>
        <button onClick={this.removeOne}>-1</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default Counter;
