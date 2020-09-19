import _ from 'lodash';
import constants from '@constants';

export const normalizeContestParticipants = (
    participants: any,
    accounts: any
) =>
    participants.map((participant: any) =>
        Object.assign(
            {},
            { ..._.pick(participant, ['status']) },
            {
                ..._.pick(
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
    _.get(constants, ['STATUS', _.toUpper(status), 'COLOUR'], 'grey');
