import { combineReducers } from 'redux';

// Reducer
import { reducer as memberReducer } from './Member';
export const reducer = combineReducers({
    member: memberReducer,
});

// Saga
export { LeaguesCreatePageContentLeagueSearchMemberSaga } from './Member';
