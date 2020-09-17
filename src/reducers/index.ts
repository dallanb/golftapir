import { combineReducers } from 'redux';
/* ------------- Reducers ------------- */
import { reducer as auth } from './AuthReducer';
import { reducer as modal } from './ModalReducer';
import {
    accountPage,
    contestPage,
    contestsPage,
    contestsCreatePage,
    loginPage,
    registerPage,
} from '@pages';

const mainReducer = combineReducers({
    accountPage,
    auth,
    contestPage,
    contestsPage,
    contestsCreatePage,
    loginPage,
    registerPage,
    modal,
});

export default mainReducer;
