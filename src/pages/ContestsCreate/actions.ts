import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        init: ['options'],
        initSuccess: null,
        initFailure: ['err'],
        terminate: null,
        set: ['data'],
        createContest: ['data'],
        createContestSuccess: ['data'],
        createContestFailure: ['err'],
        searchParticipants: ['key'],
        searchParticipantsSuccess: ['data'],
        searchParticipantsFailure: ['err'],
        searchCourses: ['key'],
        searchCoursesSuccess: ['data'],
        searchCoursesFailure: ['err'],
    },
    {
        prefix: 'CONTESTS_CREATE_PAGE_',
    }
);
export const ContestsCreatePageTypes = Types;
export default Creators;
