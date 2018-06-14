// import { handleActions, combineActions } from 'redux-actions';
// import { INCREMENT, DECREMENT } from '../actions';
const defaultState = { value: 0 };
// 【redux-action版reducer】
// export default handleActions(
//   {
//     // [[combineActions(INCREMENT, DECREMENT)]]: (state, action) => {
//     //   console.log(state, action);
//     //   return state;
//     // },
//     // [INCREMENT]: (state, action) => ({
//     //   ...state,
//     //   value: state.value + 1
//     // }),
//     [INCREMENT]: {
//       next: (state, action) => ({
//         ...state,
//         value: state.value + 1
//       }),
//       throw(state, action) {
//         console.log("error", state, action);
//       }
//     },
//     [DECREMENT]: (state, action) => ({
//       ...state,
//       value: state.value - 1
//     })
//   },
//   defaultState
// );
// 【正常版reducer】 / 【用redux-thunk】

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        value: state.value + 1
      };
    case 'DECREMENT':
      return {
        ...state,
        value: state.value - 1
      };
    default:
      return state;
  }
};
