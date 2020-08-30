import { combineReducers } from 'redux';
/* ------------- Reducers ------------- */
import { reducer as auth } from './AuthReducer';

const mainReducer = combineReducers({
    auth,
});

export default mainReducer;
