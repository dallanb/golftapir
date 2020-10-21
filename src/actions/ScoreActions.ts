// @ts-ignore
import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        fetchScore: ['uuid', 'options'],
        fetchScoreSuccess: ['data', 'metadata'],
        fetchScoreFailure: ['err'],
        fetchScoreContest: ['uuid', 'options'],
        fetchScoreContestSuccess: ['data', 'metadata'],
        fetchScoreContestFailure: ['err'],
    },
    {
        prefix: 'SCORE_',
    }
);

export const ScoreTypes = Types;
export default Creators;
