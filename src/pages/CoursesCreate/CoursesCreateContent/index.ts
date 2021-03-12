import { combineReducers } from 'redux';

// Component
export { default } from './CoursesCreateContent';

// Reducer
import { reducer as courseReducer } from './Course';
export const reducer = combineReducers({
    contest: courseReducer,
});

// Saga
export { CoursesCreatePageContentCourseSaga } from './Course';
