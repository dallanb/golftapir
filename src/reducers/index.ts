import { combineReducers } from 'redux';
/* ------------- Reducers ------------- */
import { account, auth, contest } from './data';
import {
    accountPage,
    contestPage,
    contestsCreatePage,
    contestsPage,
    loginPage,
    modal,
    registerPage,
} from './ui';

const mainReducer = combineReducers({
    accountPage: combineReducers({
        ui: accountPage,
        data: combineReducers({
            account,
            auth,
        }),
    }),
    auth,
    contestPage: combineReducers({
        ui: contestPage,
        data: contest,
    }),
    contestsPage: combineReducers({
        ui: contestsPage,
        data: contest,
    }),
    contestsCreatePage: combineReducers({
        ui: contestsCreatePage,
        data: auth,
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
