import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        fetchMember: ['uuid', 'options'],
        fetchMemberSuccess: ['data'],
        fetchMemberFailure: ['err'],
        fetchMemberUser: ['uuid', 'options'],
        fetchMemberUserSuccess: ['data'],
        fetchMemberUserFailure: ['err'],
        fetchMyMemberUser: ['options'],
        fetchMyMemberUserSuccess: ['data'],
        fetchMyMemberUserFailure: ['err'],
        refreshMyMemberStats: null,
        refreshMyMemberStatsSuccess: ['stats'],
        refreshMyMemberStatsFailure: null,
        fetchMembers: ['options'],
        fetchMembersSuccess: ['data'],
        fetchMembersFailure: ['err'],
        updateMember: ['uuid', 'values'],
        updateMemberSuccess: ['data'],
        updateMemberFailure: ['err'],
        assignAvatar: ['uuid', 'avatar'],
        assignAvatarSuccess: ['data'],
        assignAvatarFailure: ['err'],
    },
    {
        prefix: 'MEMBER_',
    }
);
export const MemberTypes = Types;
export default Creators;
