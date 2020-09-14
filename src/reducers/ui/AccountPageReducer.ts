// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions(
    {},
    {
        prefix: 'LOGIN_PAGE_',
    }
);
export const AccountPageTypes = Types;
export default Creators;

/* ------------- Interface ------------- */
export interface AccountPageInterface {}

/* ------------- Initial State ------------- */
const INITIAL_STATE: AccountPageInterface = {};

/* ------------- Reducers ------------- */

const HANDLERS = {};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
