import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        init: null,
        initSuccess: null,
        initFailure: ['err'],
        terminate: null,
        set: ['data'],
        setSheet: ['sheet'],
        holeStrokeUpdate: ['holeId', 'strokes'],
        holeStrokeUpdateSuccess: ['hole'],
        holeStrokeUpdateFailure: ['err'],
    },
    {
        prefix: 'CONTEST_PAGE_SIDER_CONTENT_PARTICIPANT_ACTIVE_CONTEST_ACTIVE_',
    }
);
export const ContestPageSiderContentParticipantActiveContestActiveTypes = Types;
export default Creators;
