import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        init: null,
        initSuccess: null,
        initFailure: ['err'],
        terminate: null,
        refresh: null,
        refreshSuccess: null,
        refreshFailure: ['err'],
        set: ['data'],
        fetchData: ['options', 'append'],
        fetchDataSuccess: ['data', 'metadata'],
        fetchDataFailure: ['err'],
    },
    {
        prefix:
            'CONTEST_PAGE_SIDER_CONTENT_PARTICIPANT_ACTIVE_CONTEST_PENDING_',
    }
);
export const ContestPageSiderContentParticipantActiveContestPendingTypes = Types;
export default Creators;
