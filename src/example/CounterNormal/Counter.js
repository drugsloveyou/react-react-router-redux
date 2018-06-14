import React, { Component } from 'react';

export default class Counter extends Component {
  state = {
    value: 0
  };

  onIncrement() {
    this.setState({
      value: ++this.state.value
    });
  }

  onDecrement() {
    this.setState({
      value: --this.state.value
    });
  }

  incrementIfOdd() {
    if (this.state.value % 2 == 0) {
      this.onIncrement();
    }
  }

  incrementAsync() {
    setTimeout(() => this.onIncrement(), 1000);
  }

  render() {
    return (
      <p>
        Clicked: {this.state.value} times
        <button onClick={() => this.onIncrement()}>+</button>
        <button onClick={() => this.onDecrement()}>-</button>
        <button onClick={() => this.incrementIfOdd()}>Increment if odd</button>
        <button onClick={() => this.incrementAsync()}>Increment async</button>
      </p>
    );
  }
}
