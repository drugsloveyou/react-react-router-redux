import { Increment, Decrement } from '../actions';
import { handleActions } from 'redux-actions';
const initState = { value: 0 };

export default handleActions(
  {
    [Increment]: (state, action) => (
      console.log(state, action),
      {
        ...state,
        value: state.value + 1
      }
    ),
    [Decrement]: {
      next: (state, action) => ({
        ...state,
        value: state.value - 1
      }),
      throw: (state, action) => ({
        ...state,
        errMsg: 'error'
      })
    }
  },
  initState
);
