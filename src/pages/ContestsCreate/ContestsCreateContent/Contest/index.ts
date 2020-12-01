import { combineReducers } from 'redux';

export { default } from './Contest';

// Reducer
import { reducer as dataReducer } from './reducer';
import { reducer as formReducer } from './ContestForm';
export const reducer = combineReducers({
    data: dataReducer,
    form: formReducer,
});

// Saga
export { default as ContestsCreatePageContentContestSaga } from './saga';
export {
    ContestsCreatePageContentContestSearchCourseSaga,
    ContestsCreatePageContentContestSearchParticipantSaga,
} from './ContestForm';
