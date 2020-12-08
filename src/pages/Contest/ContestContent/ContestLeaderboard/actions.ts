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
        setSheet: ['sheet'],
        setRankingLookup: ['rankingLookup'],
    },
    {
        prefix: 'CONTEST_PAGE_CONTENT_CONTEST_LEADERBOARD_',
    }
);
export const ContestPageContentContestLeaderboardTypes = Types;
export default Creators;
