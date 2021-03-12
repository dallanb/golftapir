import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        init: ['options'],
        initSuccess: null,
        initFailure: ['err'],
        terminate: null,
        set: ['data'],
        setInitialValues: ['initialValues'],
        setResult: ['result'],
        submit: ['data'],
        submitSuccess: null,
        submitFailure: ['err'],
    },
    {
        prefix: 'COURSES_CREATE_PAGE_CONTENT_COURSE_',
    }
);
export const CoursesCreatePageContentCourseTypes = Types;
export default Creators;
