// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createActions, createReducer } from 'reduxsauce';

// const { Types, Creators } = createActions(
//     {},
//     {
//         prefix: 'LOGIN_PAGE_',
//     }
// );
// export const LoginPageTypes = Types;
// export default Creators;

/* ------------- Interface ------------- */
export interface LoginPageInterface {}

/* ------------- Initial State ------------- */
const INITIAL_STATE: LoginPageInterface = {};

/* ------------- Reducers ------------- */

const HANDLERS = {};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
