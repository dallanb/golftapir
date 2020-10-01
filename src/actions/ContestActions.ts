// @ts-ignore
import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        fetchContest: ['uuid', 'options'],
        fetchContestSuccess: ['data', 'metadata'],
        fetchContestFailure: ['err'],
        fetchContests: ['options', 'append'],
        fetchContestsSuccess: ['data', 'metadata'],
        fetchContestsFailure: ['err'],
        createContest: ['data'],
        createContestSuccess: null,
        createContestFailure: ['err'],
        updateContestParticipant: ['uuid', 'data'],
        updateContestParticipantSuccess: ['data'],
        updateContestParticipantFailure: ['err'],
    },
    {
        prefix: 'CONTEST_',
    }
);

export const ContestTypes = Types;
export default Creators;
