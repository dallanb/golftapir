import { combineReducers } from 'redux';
/* ------------- Reducers ------------- */
import { reducer as auth } from './AuthReducer';
import { reducer as modal } from './ModalReducer';
import {
    accountPageReducer,
    contestPageReducer,
    contestsCreatePageReducer,
    contestsPageReducer,
    loginPageReducer,
    registerPageReducer,
} from '@pages';

const mainReducer = combineReducers({
    accountPage: accountPageReducer,
    auth,
    contestPage: contestPageReducer,
    contestsPage: contestsPageReducer,
    contestsCreatePage: contestsCreatePageReducer,
    // homePage: combineReducers({
    //     data: {},
    // }),
    loginPage: loginPageReducer,
    registerPage: registerPageReducer,
    modal,
});

export default mainReducer;
