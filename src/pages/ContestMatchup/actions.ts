import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        init: ['contest'],
        initSuccess: null,
        initFailure: ['err'],
        terminate: null,
        set: ['data'],
        updateScoreStatus: ['uuid', 'status'],
        updateScoreStatusSuccess: ['status'],
        updateScoreStatusFailure: ['err'],
        updateScoreSheetStatus: ['uuid', 'status'],
        updateScoreSheetStatusSuccess: ['uuid', 'status'],
        updateScoreSheetStatusFailure: ['err'],
        updateScoreSheetHole: ['uuid', 'holeId', 'data'],
        updateScoreSheetHoleSuccess: ['uuid', 'holeId', 'hole'],
        updateScoreSheetHoleFailure: ['err'],
    },
    {
        prefix: 'CONTEST_MATCHUP_PAGE_',
    }
);
export const ContestMatchupPageTypes = Types;
export default Creators;
