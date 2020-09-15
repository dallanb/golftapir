// @ts-ignore
import { createReducer } from 'reduxsauce';

/* ------------- Interface ------------- */
export interface AccountPageInterface {}

/* ------------- Initial State ------------- */
const INITIAL_STATE: AccountPageInterface = {};

/* ------------- Reducers ------------- */

const HANDLERS = {};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
