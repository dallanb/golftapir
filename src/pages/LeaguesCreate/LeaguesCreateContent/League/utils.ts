import { pick as _pick } from 'lodash';
import config from 'config';

export const prepareInitialValues = (leagueData: {
    me: any;
    members: any[];
}) => {
    const { me, members } = leagueData;
    return {
        sport_uuid: config.GOLF_UUID,
        members: [
            me.membership_uuid,
            ...members.map((member: any) => member.membership_uuid),
        ],
        permanent_members: [me, ...members],
    };
};
