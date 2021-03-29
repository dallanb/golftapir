import { combineReducers } from 'redux';

// Component
export { default } from './Member';

// Reducer
import { reducer as dataReducer } from './reducer';
import { reducer as contentReducer } from './MemberContent';
export const reducer = combineReducers({
    ui: combineReducers({
        content: contentReducer,
    }),
    data: dataReducer,
});

// Saga
export { default as MemberPageSaga } from './saga';
export {
    MemberPageContentMemberResultsSaga,
    MemberPageContentMemberInfoSaga,
} from './MemberContent';
// Routes
export { default as MemberPageRoutes } from './routes';
