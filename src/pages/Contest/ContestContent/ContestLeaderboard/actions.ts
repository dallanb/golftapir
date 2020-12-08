import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        init: ['uuid'],
        initSuccess: null,
        initFailure: ['err'],
        terminate: null,
        set: ['data'],
        setSheet: ['sheet'],
        setRankingLookup: ['rankingLookup'],
    },
    {
        prefix: 'CONTEST_PAGE_CONTENT_CONTEST_LEADERBOARD_',
    }
);
export const ContestPageContentContestLeaderboardTypes = Types;
export default Creators;
