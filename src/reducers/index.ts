import { combineReducers } from 'redux';
/* ------------- Reducers ------------- */
import { reducer as auth } from './AuthReducer';
import { reducer as modal } from './ModalReducer';

const mainReducer = combineReducers({
    auth,
    modal,
});

export default mainReducer;
