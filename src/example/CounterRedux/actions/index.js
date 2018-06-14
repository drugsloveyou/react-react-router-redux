import * as actionType from '../constants';

export function Increment() {
  return {
    type: actionType.INCREMENTTYPE
  };
}

export function Decrement() {
  return {
    type: actionType.DECREMENTTYPE
  };
}
