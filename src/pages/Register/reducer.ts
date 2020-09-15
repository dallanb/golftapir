// @ts-ignore
import { createReducer } from 'reduxsauce';

/* ------------- Interface ------------- */
export interface RegisterContainerInterface {}

/* ------------- Initial State ------------- */
const INITIAL_STATE: RegisterContainerInterface = {};

/* ------------- Reducers ------------- */

const HANDLERS = {};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
