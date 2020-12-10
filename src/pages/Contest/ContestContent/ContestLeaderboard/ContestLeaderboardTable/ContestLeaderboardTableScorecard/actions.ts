import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        init: ['uuid', 'user_uuid', 'options'],
        initSuccess: null,
        initFailure: ['err'],
        terminate: null,
        set: ['data'],
    },
    {
        prefix: 'CONTEST_PAGE_CONTENT_CONTEST_LEADERBOARD_SCORECARD_',
    }
);
export const ContestPageContentContestLeaderboardScorecardTypes = Types;
export default Creators;
