// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';

/* ------------- Interface ------------- */
export interface ContestsContainerInterface {}

/* ------------- Initial State ------------- */
const INITIAL_STATE: ContestsContainerInterface = {};

/* ------------- Reducers ------------- */

const HANDLERS = {};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
