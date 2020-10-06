import {
    pick as _pick,
    toUpper as _toUpper,
    get as _get,
    set as _set,
} from 'lodash';
import constants from '@constants';

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

export const mapStatusColour = (status: string) =>
    _get(constants, ['STATUS', _toUpper(status), 'COLOUR'], 'grey');
