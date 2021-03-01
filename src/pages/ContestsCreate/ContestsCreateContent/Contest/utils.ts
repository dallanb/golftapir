import { pick as _pick } from 'lodash';
import config from 'config';

export const prepareInitialValues = (contestData: {
    league_uuid: string;
    members: any[];
}) => {
    const { league_uuid, members } = contestData;
    return {
        league_uuid,
        sport_uuid: config.GOLF_UUID,
        buy_in: 0,
        payout: [100],
        participants: [...members.map((member: any) => member.member)],
        permanent_participants: [...members],
    };
};
