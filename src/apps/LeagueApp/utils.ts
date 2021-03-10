import {
    AppActions,
    BaseActions,
    MemberActions,
    NotificationActions,
} from '@actions';
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
            case constants.TOPICS.MEMBERS:
                switch (event) {
                    case constants.EVENTS.MEMBERS.AVATAR_CREATED:
                        emitter(
                            BaseActions.refreshMeDebounce(
                                data.league_uuid,
                                1000
                            )
                        );
                        break;
                    case constants.EVENTS.MEMBERS.AVATAR_UPDATED:
                        emitter(
                            BaseActions.refreshMeDebounce(
                                data.league_uuid,
                                1000
                            )
                        );
                        break;
                    case constants.EVENTS.MEMBERS.AVATAR_DELETED:
                        emitter(
                            BaseActions.refreshMeDebounce(
                                data.league_uuid,
                                1000
                            )
                        );
                        break;
                    case constants.EVENTS.MEMBERS.DISPLAY_NAME_UPDATED:
                        emitter(
                            BaseActions.refreshMeDebounce(
                                data.league_uuid,
                                1000
                            )
                        );
                        emitter(
                            AppActions.refreshLeagueMembers(data.league_uuid)
                        );
                        // think about emitting league refresh as well
                        break;
                    case constants.EVENTS.MEMBERS.COUNTRY_UPDATED:
                        emitter(
                            BaseActions.refreshMeDebounce(
                                data.league_uuid,
                                1000
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
                        emitter(
                            LeagueAppActions.leagueMemberActiveEvent(
                                leagueUUID,
                                data
                            )
                        );
                        break;
                    case constants.EVENTS.LEAGUES.MEMBER_INACTIVE:
                        emitter(
                            LeagueAppActions.leagueMemberInactiveEvent(
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
