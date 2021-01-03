// @ts-ignore
import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        fetchContest: ['uuid', 'options'],
        fetchContestSuccess: ['data', 'metadata'],
        fetchContestFailure: ['err'],
        fetchContests: ['options', 'append'],
        fetchContestsSuccess: ['data', 'metadata', 'append'],
        fetchContestsFailure: ['err'],
        fetchContestMaterialized: ['uuid', 'options'],
        fetchContestMaterializedSuccess: ['data', 'metadata'],
        fetchContestMaterializedFailure: ['err'],
        fetchContestsMaterialized: ['options', 'append'],
        fetchContestsMaterializedSuccess: ['data', 'metadata', 'append'],
        fetchContestsMaterializedFailure: ['err'],
        createContest: ['data'],
        createContestSuccess: ['data'],
        createContestFailure: ['err'],
        updateContest: ['uuid', 'data'],
        updateContestSuccess: ['data'],
        updateContestFailure: ['err'],
        assignAvatar: ['uuid', 'avatar'],
        assignAvatarSuccess: ['data'],
        assignAvatarFailure: ['err'],
        fetchContestParticipantUser: ['contest_uuid', 'member_uuid'],
        fetchContestParticipantUserSuccess: ['data'],
        fetchContestParticipantUserFailure: ['err'],
        fetchContestParticipants: ['uuid', 'options'],
        fetchContestParticipantsSuccess: ['data'],
        fetchContestParticipantsFailure: ['err'],
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
