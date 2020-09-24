import { pick as _pick, toUpper as _toUpper, get as _get } from 'lodash';
import constants from '@constants';

export const normalizeContestParticipants = (
    participants: any,
    accounts: any
) =>
    participants.map((participant: any) =>
        Object.assign(
            {},
            { ..._pick(participant, ['status']) },
            {
                ..._pick(
                    accounts.find(
                        (account: any) =>
                            account.membership_uuid === participant.user_uuid
                    ),
                    ['first_name', 'last_name', 'avatar']
                ),
            }
        )
    );

export const mapStatusColour = (status: string) =>
    _get(constants, ['STATUS', _toUpper(status), 'COLOUR'], 'grey');
