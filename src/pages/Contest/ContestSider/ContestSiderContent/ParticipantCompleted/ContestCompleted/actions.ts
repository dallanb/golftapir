import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        init: null,
        initSuccess: null,
        initFailure: ['err'],
        terminate: null,
        set: ['data'],
    },
    {
        prefix:
            'CONTEST_PAGE_SIDER_CONTENT_PARTICIPANT_COMPLETED_CONTEST_COMPLETED_',
    }
);
export const ContestPageSiderContentParticipantCompletedContestCompletedTypes = Types;
export default Creators;
