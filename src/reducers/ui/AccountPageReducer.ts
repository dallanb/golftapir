// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { AccountTypes } from '@reducers/data/AccountReducer';

/* ------------- Interface ------------- */
export interface AccountPageInterface {}

/* ------------- Initial State ------------- */
const INITIAL_STATE: AccountPageInterface = {};

/* ------------- Reducers ------------- */

const HANDLERS = {};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
