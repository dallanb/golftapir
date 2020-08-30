import { combineReducers } from 'redux';
/* ------------- Reducers ------------- */
import { reducer as auth } from './AuthReducer';

const mainReducer = combineReducers({
    auth,
});

// const rootReducer = reduceReducers(mainReducer);
export default mainReducer;
