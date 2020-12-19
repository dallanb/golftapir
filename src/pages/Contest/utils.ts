import { countBy as _countBy, get as _get, set as _set } from 'lodash';
import constants from '@constants';
import moment from 'moment';
import ContestPageActions from './actions';

export const prepareParticipant = (
    uuid: string,
    accountHash: any
): {
    name: string;
    s3_filename: string;
    account: any;
} => {
    const participant = { name: '', s3_filename: '', account: null };
    const account = _get(accountHash, [uuid], {
        display_name: '',
        avatar: { s3_filename: '' },
    });
    participant.account = account;
    participant.name = account.display_name;
    participant.s3_filename = _get(account, ['avatar', 's3_filename'], '');
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

export const socketEventHandlers = (socket: WebSocket, emitter: any) => {
    socket.onmessage = (evt: MessageEvent) => {
        const data = JSON.parse(evt.data);
        // console.log(data);
        const [topic, event] = data.event.split(':');
        switch (topic) {
            case constants.TOPICS.CONTESTS:
                switch (event) {
                    case constants.EVENTS.CONTESTS.PARTICIPANT_ACTIVE:
                        emitter(ContestPageActions.refresh());
                        break;
                    case constants.EVENTS.CONTESTS.CONTEST_READY:
                        emitter(ContestPageActions.refresh());
                        break;
                    case constants.EVENTS.CONTESTS.CONTEST_ACTIVE:
                        emitter(ContestPageActions.refresh());
                        break;
                    default:
                        break;
                }
                break;
            case constants.TOPICS.SCORES:
                switch (event) {
                    case constants.EVENTS.SCORES.STROKE_UPDATE:
                        emitter(
                            ContestPageActions.updateContestParticipantScore(
                                data.participant_uuid,
                                data.strokes,
                                data.score
                            )
                        );
                        break;
                }
                break;
            default:
                break;
        }
    };
    return () => {};
};

export const formatTimeStamp = (timestamp: number) =>
    timestamp ? moment(timestamp).format('MMM DD h:mm A') : 'NA';
