import { combineReducers } from 'redux';
/* ------------- Reducers ------------- */
import { reducer as account } from './AccountReducer';
import { reducer as auth } from './AuthReducer';
import { reducer as modal } from './ModalReducer';

const mainReducer = combineReducers({
    account,
    auth,
    modal,
});

export default mainReducer;
