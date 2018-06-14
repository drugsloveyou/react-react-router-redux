import { INCREMENTTYPE, DECREMENTTYPE } from '../constants';
const initState = { value: 0 };

export default function counter(state = initState, action) {
  switch (action.type) {
    case INCREMENTTYPE:
      return {
        ...state,
        value: state.value + 1
      };
    case DECREMENTTYPE:
      return {
        ...state,
        value: state.value - 1
      };
    default:
      return state;
  }
}
