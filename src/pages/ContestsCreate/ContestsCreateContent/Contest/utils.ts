import { pick as _pick } from 'lodash';
import config from 'Config';

export const prepareInitialValues = (contestData: {
    me: any;
    members: any[];
}) => {
    const { me, members } = contestData;
    return {
        league_uuid: me.league,
        sport_uuid: config.GOLF_UUID,
        buy_in: 0,
        payout: [100],
        participants: [
            me.member,
            ...members.map((member: any) => member.member),
        ],
        permanent_participants: [me, ...members],
    };
};
