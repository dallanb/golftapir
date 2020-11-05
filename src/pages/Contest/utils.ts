import { get as _get } from 'lodash';
import constants from '@constants';
import moment from 'moment';

export const prepareParticipant = (
    uuid: string,
    accountHash: any
): { name: string; s3_filename: string } => {
    const participant = { name: '', s3_filename: '' };
    const {
        first_name,
        last_name,
        avatar: { s3_filename },
    } = _get(accountHash, [uuid], {
        first_name: '',
        last_name: '',
        avatar: { s3_filename: '' },
    });
    participant.name = `${first_name} ${last_name}`;
    participant.s3_filename = s3_filename;
    return participant;
};

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
    key: string
): { show: boolean; enabled: boolean } => {
    const renderAction = { show: false, enabled: true };
    switch (key) {
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
    timestamp ? moment(timestamp).format('MMM DD H:M A') : 'NA';
