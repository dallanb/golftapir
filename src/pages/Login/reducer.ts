import { createReducer } from 'reduxsauce';

/* ------------- Interface ------------- */
export interface LoginPageInterface {}

/* ------------- Initial State ------------- */
const INITIAL_STATE: LoginPageInterface = {};

/* ------------- Reducers ------------- */

const HANDLERS = {};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
