import React, { Component } from 'react';
import PropTypes from 'prop-types';
/*******add*******/
import { connect } from 'react-redux';

import { INCREMENT, DECREMENT } from '../actions';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.incrementAsync = this.incrementAsync.bind(this);
    this.incrementIfOdd = this.incrementIfOdd.bind(this);
  }

  incrementIfOdd() {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement();
    }
  }

  incrementAsync() {
    setTimeout(this.props.onIncrement, 1000);
  }

  render() {
    const { value, onIncrement, onDecrement } = this.props;
    return (
      <p>
        Clicked: {value} times <button onClick={onIncrement}>+</button>{' '}
        <button onClick={onDecrement}>-</button>{' '}
        <button onClick={this.incrementIfOdd}>Increment if odd</button>{' '}
        <button onClick={this.incrementAsync}>Increment async</button>
      </p>
    );
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
};
/*******add*******/
// const mapStateToProps = state => ({
//   value: state.value
// });

// const mapDispatchToProps = dispatch => ({
//   onIncrement: () => dispatch(INCREMENT()),
//   onDecrement: () => dispatch(INCREMENT())
// });
/*******add*******/

export default Counter;

/*******modify*******/
// export default connect(mapStateToProps, mapDispatchToProps)(Counter)
