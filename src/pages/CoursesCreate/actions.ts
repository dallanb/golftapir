import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        init: ['options'],
        initSuccess: null,
        initFailure: ['err'],
        terminate: null,
        set: ['data'],
    },
    {
        prefix: 'COURSES_CREATE_PAGE_',
    }
);
export const CoursesCreatePageTypes = Types;
export default Creators;
