import { combineReducers } from 'redux';

// Component
export { default } from './MembersCreate';

// Reducer
import { reducer as dataReducer } from './reducer';
import { reducer as contentReducer } from './MembersCreateContent';
export const reducer = combineReducers({
    ui: combineReducers({
        content: contentReducer,
    }),
    data: dataReducer,
});

// Saga
export { default as MembersCreatePageSaga } from './saga';
export { MembersCreatePageContentMemberSaga } from './MembersCreateContent';

// Routes
export { default as MembersCreatePageRoutes } from './routes';
