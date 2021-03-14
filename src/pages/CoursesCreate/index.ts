import { combineReducers } from 'redux';

// Component
export { default } from './CoursesCreate';

// Reducer
import { reducer as dataReducer } from './reducer';
import { reducer as contentReducer } from './CoursesCreateContent';
export const reducer = combineReducers({
    ui: combineReducers({
        content: contentReducer,
    }),
    data: dataReducer,
});

// Saga
export { default as CoursesCreatePageSaga } from './saga';
export {
    CoursesCreatePageContentCourseSaga,
} from './CoursesCreateContent';

// Routes
export { default as CoursesCreatePageRoutes } from './routes';
