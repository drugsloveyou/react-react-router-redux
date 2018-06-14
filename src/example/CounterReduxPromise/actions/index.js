import * as actionType from '../constants';
import { createAction, createActions } from 'redux-actions';
import http from '../../../util/http';

export const Increment = createAction(
  actionType.INCREMENTTYPE,
  async () => {
    const data = await http('/json/test');
    return {
      ...data,
      text: 1
    };
  },
  () => ({
    text: 1
  })
);

export const Decrement = createAction(actionType.DECREMENTTYPE, async () => {
  const data = await new Promise(resolve => {
    setTimeout(() => resolve({ yes: true }), 1000);
  });
  return {
    ...data,
    text: 1
  };
});
