import * as actionType from '../constants';
const initState = {
  value: 0
};
export default function(state = initState, action) {
  switch (action.type) {
    case actionType.INCREMENTTYPE:
      return {
        ...state,
        value: state.value + 1
      };
    case actionType.DECREMENTTYPE:
      return {
        ...state,
        value: state.value - 1
      };
    default:
      return state;
  }
}
