import { combineReducers } from 'redux';

// Component
export { default } from './Member';

// Reducer
import { reducer as dataReducer } from './reducer';
import { reducer as contentReducer } from './MemberContent';
// import { reducer as siderReducer } from './MemberSider';
export const reducer = combineReducers({
    ui: combineReducers({
        content: contentReducer,
        // sider: siderReducer,
    }),
    data: dataReducer,
});

// Saga
export { default as MemberPageSaga } from './saga';
export { MemberPageContentMemberResultsSaga } from './MemberContent';
// export { MemberPageSiderContentSearchSaga } from './MemberSider';
// Routes
export { default as MemberPageRoutes } from './routes';
