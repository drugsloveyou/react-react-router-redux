import { createAction } from "redux-actions";
import { INCREMENTTYPE, DECREMENTTYPE } from "./types";

//【redux-action版actionCreator】
// export const { INCREMENT, DECREMENT } = {
//   INCREMENT: createAction(INCREMENTTYPE, async () => {
//     //加入redux-promise
//     const data = await new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(1);
//       }, 1000);
//     });
//     console.log(data);
//     return data;
//   }),
//   DECREMENT: createAction(DECREMENTTYPE)
// };

// 【加入thunk版的actionCreator】

export const { INCREMENT, DECREMENT } = {
  INCREMENT: () => (dispatch, getState) => {
    function createPromise() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(1);
        }, 1000);
      });
    }
    return createPromise().then(value => {
      const state = getState();
      console.log("state", state);
      dispatch({ type: INCREMENTTYPE, value: value });
    });
  },
  DECREMENT: () => ({ type: DECREMENTTYPE })
};

//【正常版actionsCreator】
// export const { INCREMENT, DECREMENT } = {
//   INCREMENT: () => ({ type: INCREMENTTYPE }),
//   DECREMENT: () => ({ type: DECREMENTTYPE })
// };
