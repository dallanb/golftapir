import { combineReducers } from 'redux';

// Reducer
import { reducer as participantReducer } from './Participant';
export const reducer = combineReducers({
    participant: participantReducer,
});

// Saga
export { LeaguesCreatePageContentLeagueSearchParticipantSaga } from './Participant';
