import { countBy as _countBy, get as _get, set as _set } from 'lodash';
import constants from '@constants';
import moment from 'moment';
import ContestPageActions from './actions';
import routes from '@constants/routes';

export const prepareParticipant = (
    uuid: string,
    contest: any,
    membersHash: any
): {
    name: string;
    country: string;
    s3_filename: string;
    member: any;
    leagueMemberUUID: any;
    tags: string[];
} => {
    const participant: {
        name: string;
        s3_filename: string;
        country: string;
        member: any;
        leagueMemberUUID: string;
        tags: string[];
    } = {
        name: '',
        s3_filename: '',
        country: '',
        leagueMemberUUID: '',
        member: null,
        tags: [],
    };
    const { participants: participantsHash, owner } = contest;
    const member = _get(membersHash, [uuid], {
        display_name: '',
        country: '',
        avatar: '',
        uuid: null,
        user_uuid: null,
    });
    const status: string = _get(
        participantsHash,
        [uuid, 'status'],
        constants.STATUS.ACTIVE.KEY
    );
    participant.member = member;
    participant.leagueMemberUUID = member.uuid;
    participant.name = member.display_name;
    participant.country = member.country;
    participant.s3_filename = _get(member, ['avatar'], '');
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

export const isNextPathContest = (uuid: string, nextPath: string) => {
    const routeSnippets = nextPath.split('/').slice(-3);
    // two options here at the moment for contest paths
    // routes.ROUTES.CONTEST && routes.ROUTES.CONTEST_UPDATE
    // if routesSnippets[2] is 'update' we will try CONTEST_UPDATE
    // if routesSnippets[2] is a uuid we will try CONTEST
    if (routeSnippets[2] === 'update') {
        const updateRouteSnippets = routes.ROUTES.CONTEST_UPDATE.ROUTE.split(
            '/'
        ).slice(1);
        return routeSnippets.every((snippet, index) => {
            if (updateRouteSnippets[index] === ':contest_uuid') {
                return snippet === uuid;
            } else {
                return snippet === updateRouteSnippets[index];
            }
        });
    } else if (routeSnippets[1] === 'contests') {
        const readRouteSnippets = routes.ROUTES.CONTEST.ROUTE.split('/').slice(
            1
        );
        return routeSnippets.slice(1).every((snippet, index) => {
            if (readRouteSnippets[index] === ':contest_uuid') {
                return snippet === uuid;
            } else {
                return snippet === readRouteSnippets[index];
            }
        });
    }
    return false;
};

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
                    case constants.EVENTS.CONTESTS.PARTICIPANT_INACTIVE:
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
                    case constants.EVENTS.CONTESTS.CONTEST_INACTIVE:
                        emitter(ContestPageActions.refresh());
                        break;
                    case constants.EVENTS.CONTESTS.CONTEST_COMPLETED:
                        emitter(ContestPageActions.refresh());
                        break;
                    case constants.EVENTS.CONTESTS.AVATAR_CREATED:
                        emitter(ContestPageActions.refresh());
                        break;
                    case constants.EVENTS.CONTESTS.AVATAR_DELETED:
                        emitter(ContestPageActions.refresh());
                        break;
                    case constants.EVENTS.CONTESTS.NAME_UPDATED:
                        emitter(ContestPageActions.refresh());
                        break;
                    case constants.EVENTS.CONTESTS.START_TIME_UPDATED:
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
    timestamp ? moment(timestamp).format('LLL') : 'NA';
