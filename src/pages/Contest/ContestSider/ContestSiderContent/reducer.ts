// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { ContestPageSiderContentInterface } from './types';

/* ------------- Initial State ------------- */
const INITIAL_STATE: ContestPageSiderContentInterface = {};

/* ------------- Reducers ------------- */

const HANDLERS = {};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
