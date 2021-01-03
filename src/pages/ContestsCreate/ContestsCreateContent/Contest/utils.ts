import { pick as _pick } from 'lodash';
import config from 'config';

export const prepareInitialValues = (contestData: {
    me: any;
    members: any[];
}) => {
    const { me, members } = contestData;
    return {
        league_uuid: me.league_uuid,
        sport_uuid: config.GOLF_UUID,
        participants: [me.uuid, ...members.map((member: any) => member.uuid)],
        permanent_participants: [me, ...members],
    };
};
