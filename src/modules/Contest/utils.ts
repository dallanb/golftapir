import constants from '@constants';
import ContestModuleActions from './actions';

export const socketEventHandlers = (socket: WebSocket, emitter: any) => {
    socket.onmessage = (evt: MessageEvent) => {
        const data = JSON.parse(evt.data);
        console.info(data);
        const [topic, event] = data.event.split(':');
        switch (topic) {
            case constants.TOPICS.CONTESTS:
                switch (event) {
                    case constants.EVENTS.CONTESTS.PARTICIPANT_ACTIVE:
                        emitter(
                            ContestModuleActions.refresh(data.contest_uuid)
                        );
                        break;
                    case constants.EVENTS.CONTESTS.PARTICIPANT_INACTIVE:
                        emitter(
                            ContestModuleActions.refresh(data.contest_uuid)
                        );
                        break;
                    case constants.EVENTS.CONTESTS.PARTICIPANT_COMPLETED:
                        emitter(
                            ContestModuleActions.refresh(data.contest_uuid)
                        );
                        break;
                    case constants.EVENTS.CONTESTS.CONTEST_READY:
                        emitter(
                            ContestModuleActions.refresh(data.contest_uuid)
                        );
                        break;
                    case constants.EVENTS.CONTESTS.CONTEST_ACTIVE:
                        emitter(
                            ContestModuleActions.refresh(data.contest_uuid)
                        );
                        break;
                    case constants.EVENTS.CONTESTS.CONTEST_INACTIVE:
                        emitter(
                            ContestModuleActions.refresh(data.contest_uuid)
                        );
                        break;
                    case constants.EVENTS.CONTESTS.CONTEST_COMPLETED:
                        emitter(
                            ContestModuleActions.refresh(data.contest_uuid)
                        );
                        break;
                    case constants.EVENTS.CONTESTS.AVATAR_CREATED:
                        emitter(
                            ContestModuleActions.refresh(data.contest_uuid)
                        );
                        break;
                    case constants.EVENTS.CONTESTS.AVATAR_UPDATED:
                        emitter(
                            ContestModuleActions.refresh(data.contest_uuid)
                        );
                        break;
                    case constants.EVENTS.CONTESTS.AVATAR_DELETED:
                        emitter(
                            ContestModuleActions.refresh(data.contest_uuid)
                        );
                        break;
                    case constants.EVENTS.CONTESTS.NAME_UPDATED:
                        emitter(
                            ContestModuleActions.refresh(data.contest_uuid)
                        );
                        break;
                    case constants.EVENTS.CONTESTS.START_TIME_UPDATED:
                        emitter(
                            ContestModuleActions.refresh(data.contest_uuid)
                        );
                        break;
                    default:
                        break;
                }
                break;
            case constants.TOPICS.SCORES:
                switch (event) {
                    case constants.EVENTS.SCORES.STROKE_UPDATE:
                        emitter(
                            ContestModuleActions.updateContestParticipantScore(
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
