import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        init: ['uuid'],
        initSuccess: null,
        initFailure: ['err'],
        terminate: null,
        set: ['data'],
    },
    {
        prefix: 'CONTEST_PAGE_SIDER_COURSE_',
    }
);
export const ContestPageSiderCourseTypes = Types;
export default Creators;
