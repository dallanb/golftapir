import {
    pick as _pick,
    toUpper as _toUpper,
    get as _get,
    set as _set,
} from 'lodash';
import constants from '@constants';
import moment from 'moment';

export const normalizeContestParticipants = (
    participants: any,
    accounts: any,
    me: any
) =>
    participants.map((participant: any) =>
        Object.assign(
            {},
            { ..._pick(participant, ['uuid', 'status']) },
            {
                ..._pick(
                    accounts.find(
                        (account: any) =>
                            account.membership_uuid === participant.user_uuid
                    ),
                    ['membership_uuid', 'first_name', 'last_name', 'avatar']
                ),
            },
            {
                is_me: participant.user_uuid === me.membership_uuid,
            }
        )
    );

export const mergeContestParticipant = (
    existingParticipants: any,
    newParticipant: any
): any =>
    existingParticipants.map((existingParticipant: any) =>
        existingParticipant.uuid === newParticipant.uuid
            ? { ...existingParticipant, ...newParticipant }
            : existingParticipant
    );

export const renderAction = (
    key: string,
    options: any
): { show: boolean; enabled: boolean } => {
    const renderAction = { show: false, enabled: true };
    switch (key) {
        case constants.ACTION.READY.KEY:
            const participantActive =
                options.participants.findIndex(
                    (participant: any) =>
                        participant.status !== constants.STATUS.ACTIVE.KEY
                ) === -1;
            renderAction.show = options.isOwner;
            renderAction.enabled =
                participantActive &&
                options.isOwner &&
                options.status !== constants.STATUS.ACTIVE.KEY &&
                options.status !== constants.STATUS.READY.KEY;
            break;
        case constants.ACTION.UPDATE.KEY:
            renderAction.show = options.isOwner;
            renderAction.enabled =
                options.isOwner &&
                options.status !== constants.STATUS.ACTIVE.KEY &&
                options.status !== constants.STATUS.READY.KEY;
            break;
        case constants.ACTION.ACTIVATE.KEY:
            renderAction.show = options.isOwner;
            renderAction.enabled =
                options.startTime <= +new Date() &&
                options.status === constants.STATUS.READY.KEY;
            break;
        case constants.ACTION.MATCHUP.KEY:
            renderAction.show = true;
            renderAction.enabled = true;
            break;
        default:
            console.error('Invalid key: ', key);
    }
    return renderAction;
};

export const formatTimeStamp = (timestamp: number) =>
    timestamp ? moment(timestamp).format('MMM D, H:M A') : 'NA';
