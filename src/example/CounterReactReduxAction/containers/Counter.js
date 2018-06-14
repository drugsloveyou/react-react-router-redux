import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../components/Button';
import { Decrement, Increment } from '../actions';

function Counter({
  onIncrement,
  onDecrement,
  incrementIfOdd,
  incrementAsync,
  value
}) {
  return (
    <p>
      Clicked: {value} times <Button clickHandler={onIncrement}>+</Button>
      <Button clickHandler={onDecrement}>-</Button>
      <Button
        clickHandler={() => {
          value % 2 === 0 ? onIncrement() : null;
        }}
      >
        Increment if odd
      </Button>
      <Button clickHandler={incrementAsync}>Increment async</Button>
    </p>
  );
}

const mapStateToProps = (state, props) => ({
  value: state.value
});

const mapDispatchToProps = (dispatch, props) => (
  console.log(props),
  {
    onIncrement: () => dispatch(Increment()),
    onDecrement: () => dispatch(Decrement()),
    incrementAsync: () => {
      setTimeout(() => dispatch(Increment()), 1000);
    }
  }
);

// const mergeProps = (stateProps, dispatchProps, ownProps) => {
//   console.log(stateProps, dispatchProps, ownProps);
//   return {
//     ...stateProps,
//     ...dispatchProps,
//     incrementIfOdd: () => {
//       if (stateProps.value % 2 == 0) dispatchProps.onIncrement();
//     }
//   };
// };

export default connect(
  mapStateToProps,
  mapDispatchToProps
  // mergeProps
)(Counter);
