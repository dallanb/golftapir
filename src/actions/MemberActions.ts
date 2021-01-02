import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        fetchMember: ['uuid', 'options'],
        fetchMemberSuccess: ['data'],
        fetchMemberFailure: ['err'],
        fetchMembers: ['options'],
        fetchMembersSuccess: ['data'],
        fetchMembersFailure: ['err'],
        updateMember: ['uuid', 'values'],
        updateMemberSuccess: ['data'],
        updateMemberFailure: ['err'],
    },
    {
        prefix: 'MEMBER_',
    }
);
export const MemberTypes = Types;
export default Creators;
