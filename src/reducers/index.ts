import { combineReducers } from 'redux';
/* ------------- Reducers ------------- */
import { account, auth, contest } from './data';
import { loginPage, modal, registerPage } from './ui';

const mainReducer = combineReducers({
    accountPage: combineReducers({
        data: account,
    }),
    auth,
    contestPage: combineReducers({
        // ui:
        data: contest,
    }),
    contestsPage: combineReducers({
        data: contest,
    }),
    // homePage: combineReducers({
    //     data: {},
    // }),
    loginPage: combineReducers({
        ui: loginPage,
        data: auth,
    }),
    registerPage: combineReducers({
        ui: registerPage,
        data: auth,
    }),
    modal,
});

export default mainReducer;
