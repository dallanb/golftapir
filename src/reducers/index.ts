import { combineReducers } from 'redux';
import { filterActions } from 'redux-ignore';
import constants from '@constants';
/* ------------- Reducers ------------- */
import { account, auth, contest } from './data';
import {
    accountContainer,
    contestContainer,
    contestsCreateContainer,
    contestsContainer,
    loginContainer,
    modal,
    registerContainer,
} from './ui';

const mainReducer = combineReducers({
    accountPage: combineReducers({
        ui: combineReducers({ accountContainer }),
        data: combineReducers({
            account: filterActions(
                account,
                (action: any) =>
                    action.target === constants.TARGETS.ACCOUNT_PAGE
            ),
            auth,
        }),
    }),
    auth,
    contestPage: combineReducers({
        ui: combineReducers({ contestContainer }),
        data: combineReducers({
            contest: filterActions(
                contest,
                (action: any) =>
                    action.target === constants.TARGETS.CONTEST_PAGE
            ),
        }),
    }),
    contestsPage: combineReducers({
        ui: combineReducers({ contestsContainer }),
        data: combineReducers({
            contest: filterActions(
                contest,
                (action: any) =>
                    action.target === constants.TARGETS.CONTESTS_PAGE
            ),
        }),
    }),
    contestsCreatePage: combineReducers({
        ui: combineReducers({ contestsCreateContainer }),
        data: combineReducers({ auth }),
    }),
    // homePage: combineReducers({
    //     data: {},
    // }),
    loginPage: combineReducers({
        ui: combineReducers({ loginContainer }),
        data: combineReducers({ auth }),
    }),
    registerPage: combineReducers({
        ui: combineReducers({ registerContainer }),
        data: combineReducers({ auth }),
    }),
    modal,
});

export default mainReducer;
