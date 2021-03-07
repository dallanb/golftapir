import { AppActions, MemberActions, NotificationActions } from '@actions';
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
            case constants.TOPICS.LEAGUES: {
                const leagueUUID = data.league_uuid;
                switch (event) {
                    case constants.EVENTS.LEAGUES.MEMBER_CREATED:
                        emitter(AppActions.refreshLeagueMembers(leagueUUID));
                        break;
                    case constants.EVENTS.LEAGUES.MEMBER_PENDING:
                        emitter(AppActions.refreshLeagueMembers(leagueUUID));
                        break;
                    case constants.EVENTS.LEAGUES.MEMBER_ACTIVE:
                        emitter(AppActions.refreshLeagueMembers(leagueUUID));
                        break;
                    case constants.EVENTS.LEAGUES.MEMBER_INACTIVE:
                        emitter(AppActions.refreshLeagueMembers(leagueUUID));
                        break;
                    default:
                        break;
                }
                break;
            }
            default:
                break;
        }
    };
    return () => {};
};
