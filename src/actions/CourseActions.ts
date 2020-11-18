// @ts-ignore
import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        fetchCourse: ['uuid', 'options'],
        fetchCourseSuccess: ['data', 'metadata'],
        fetchCourseFailure: ['err'],
        fetchCourses: ['options', 'append'],
        fetchCoursesSuccess: ['data', 'metadata'],
        fetchCoursesFailure: ['err'],
        searchCourses: ['key'],
        searchCoursesSuccess: ['data'],
        searchCoursesFailure: ['err'],
    },
    {
        prefix: 'COURSE_',
    }
);

export const CourseTypes = Types;
export default Creators;
