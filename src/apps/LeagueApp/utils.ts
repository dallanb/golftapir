import { MemberActions, NotificationActions } from '@actions';
import LeagueAppActions from './actions';
import constants from '@constants';

export const socketEventHandlers = (socket: WebSocket, emitter: any) => {
    socket.onmessage = (evt: MessageEvent) => {
        const data = JSON.parse(evt.data);
        console.info(data);
        const [topic, event] = data.event.split(':');
        switch (topic) {
            case constants.TOPICS.NOTIFICATIONS:
                switch (event) {
                    case constants.EVENTS.NOTIFICATIONS.PENDING:
                        emitter(
                            NotificationActions.fetchPendingSuccess(data.count)
                        );
                        break;
                    default:
                        break;
                }
                break;
            case constants.TOPICS.CONTESTS:
                switch (event) {
                    case constants.EVENTS.CONTESTS.CONTEST_COMPLETED:
                        emitter(MemberActions.refreshMyMemberStats());
                        break;
                }
                break;
            default:
                break;
        }
    };
    return () => {};
};

export const topicSocketEventHandlers = (socket: WebSocket, emitter: any) => {
    socket.onmessage = (evt: MessageEvent) => {
        const data = JSON.parse(evt.data);
        console.info(data);
        const [topic, event] = data.event.split(':');
        switch (topic) {
            case constants.TOPICS.LEAGUES:
                switch (event) {
                    case constants.EVENTS.LEAGUES.MEMBER_PENDING:
                        break;
                    case constants.EVENTS.LEAGUES.MEMBER_ACTIVE:
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
    };
    return () => {};
};
