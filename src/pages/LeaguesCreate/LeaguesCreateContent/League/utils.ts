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
            me.user_uuid,
            ...members.map((member: any) => member.user_uuid),
        ],
        permanent_members: [me, ...members],
    };
};
