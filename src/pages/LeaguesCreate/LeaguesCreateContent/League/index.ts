import { combineReducers } from 'redux';

export { default } from './League';

// Reducer
import { reducer as dataReducer } from './reducer';
import { reducer as formReducer } from './LeagueForm';
export const reducer = combineReducers({
    data: dataReducer,
    form: formReducer,
});

// Saga
export { default as LeaguesCreatePageContentLeagueSaga } from './saga';
export { LeaguesCreatePageContentLeagueSearchMemberSaga } from './LeagueForm';
