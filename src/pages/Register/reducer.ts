// @ts-ignore
import { createReducer } from 'reduxsauce';

/* ------------- Interface ------------- */
export interface RegisterPageInterface {}

/* ------------- Initial State ------------- */
const INITIAL_STATE: RegisterPageInterface = {};

/* ------------- Reducers ------------- */

const HANDLERS = {};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
