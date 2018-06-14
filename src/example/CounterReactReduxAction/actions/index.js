import * as actionType from '../constants';
import { createAction, createActions } from 'redux-actions';

export const Increment = createAction(actionType.INCREMENTTYPE);
export const Decrement = createAction(actionType.DECREMENTTYPE);
