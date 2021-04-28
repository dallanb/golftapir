import constants from '@constants';
import ContestPageActions from '@pages/Contest/actions';

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
                    case constants.EVENTS.CONTESTS.AVATAR_UPDATED:
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
