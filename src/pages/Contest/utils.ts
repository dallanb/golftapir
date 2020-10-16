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

export const mapStatusColour = (status: string): string =>
    _get(constants, ['STATUS', _toUpper(status), 'COLOUR'], 'grey');

export const mapActionColour = (action: string): string =>
    _get(constants, ['ACTION', _toUpper(action), 'COLOUR'], 'grey');

export const mapActionLabel = (action: string): string =>
    _get(constants, ['ACTION', _toUpper(action), 'LABEL'], null);

export const renderAction = (
    key: string,
    options: any
): { show: boolean; enabled: boolean } => {
    const renderAction = { show: false, enabled: true };
    switch (key) {
        case 'ready':
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
        case 'update':
            renderAction.show = options.isOwner;
            renderAction.enabled =
                options.isOwner &&
                options.status !== constants.STATUS.ACTIVE.KEY &&
                options.status !== constants.STATUS.READY.KEY;
            break;
        case 'activate':
            renderAction.show = true;
            renderAction.enabled =
                options.status === constants.STATUS.READY.KEY;
            break;
        default:
            console.error('Invalid key: ', key);
    }
    return renderAction;
};

export const formatTimeStamp = (timestamp: number) =>
    timestamp ? moment(timestamp).format('MMM D, H:M A') : 'NA';
