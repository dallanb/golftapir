import {
    AppActions,
    BaseActions,
    MemberActions,
    NotificationActions,
} from '@actions';
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
            case constants.TOPICS.MEMBERS:
                switch (event) {
                    case constants.EVENTS.MEMBERS.DISPLAY_NAME_UPDATED:
                        emitter(BaseActions.refreshMe(data.league_uuid));
                        emitter(
                            AppActions.refreshLeagueMembers(data.league_uuid)
                        );
                        // think about emitting league refresh as well
                        break;
                    case constants.EVENTS.MEMBERS.COUNTRY_UPDATED:
                        emitter(BaseActions.refreshMe(data.league_uuid));
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
                        emitter(
                            AppActions.leagueMemberInactiveEvent(
                                leagueUUID,
                                data
                            )
                        );
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
