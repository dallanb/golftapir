import { createReducer } from 'reduxsauce';

/* ------------- Interface ------------- */
export interface LoginContainerInterface {}

/* ------------- Initial State ------------- */
const INITIAL_STATE: LoginContainerInterface = {};

/* ------------- Reducers ------------- */

const HANDLERS = {};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
