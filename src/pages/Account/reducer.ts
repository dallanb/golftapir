// @ts-ignore
import { createReducer } from 'reduxsauce';

/* ------------- Interface ------------- */
export interface AccountContainerInterface {}

/* ------------- Initial State ------------- */
const INITIAL_STATE: AccountContainerInterface = {};

/* ------------- Reducers ------------- */

const HANDLERS = {};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
