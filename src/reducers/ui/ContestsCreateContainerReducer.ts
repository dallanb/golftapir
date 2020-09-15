// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';

/* ------------- Interface ------------- */
export interface ContestsCreateContainerInterface {}

/* ------------- Initial State ------------- */
const INITIAL_STATE: ContestsCreateContainerInterface = {};

/* ------------- Reducers ------------- */

const HANDLERS = {};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
