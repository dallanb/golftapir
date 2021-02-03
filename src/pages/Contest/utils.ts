import { countBy as _countBy, get as _get, set as _set } from 'lodash';
import constants from '@constants';
import moment from 'moment';
import ContestPageActions from './actions';

export const prepareParticipant = (
    uuid: string,
    contest: any,
    membersHash: any
): {
    name: string;
    country: string;
    s3_filename: string;
    member: any;
    tags: string[];
} => {
    const participant: {
        name: string;
        s3_filename: string;
        country: string;
        member: any;
        tags: string[];
    } = { name: '', s3_filename: '', country: '', member: null, tags: [] };
    const { participants: participantsHash, owner } = contest;
    const member = _get(membersHash, [uuid], {
        display_name: '',
        country: '',
        avatar: { s3_filename: '' },
        user_uuid: null,
    });
    const status: string = _get(
        participantsHash,
        [uuid, 'status'],
        constants.STATUS.ACTIVE.KEY
    );
    participant.member = member;
    participant.name = member.display_name;
    participant.country = member.country;
    participant.s3_filename = _get(member, ['avatar', 's3_filename'], '');
    participant.tags.push(status);
    if (owner === member.user_uuid) {
        participant.tags.push(constants.STATUS.OWNER.KEY);
    }

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
        // console.info(data);
        const [topic, event] = data.event.split(':');
        switch (topic) {
            case constants.TOPICS.CONTESTS:
                switch (event) {
                    case constants.EVENTS.CONTESTS.PARTICIPANT_ACTIVE:
                        emitter(ContestPageActions.refresh());
                        break;
                    case constants.EVENTS.CONTESTS.PARTICIPANT_COMPLETED:
                        emitter(ContestPageActions.refresh());
                        break;
                    case constants.EVENTS.CONTESTS.CONTEST_READY:
                        emitter(ContestPageActions.refresh());
                        break;
                    case constants.EVENTS.CONTESTS.CONTEST_ACTIVE:
                        emitter(ContestPageActions.refresh());
                        break;
                    case constants.EVENTS.CONTESTS.CONTEST_COMPLETED:
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
    timestamp ? moment(timestamp).format('LLLL') : 'NA';
