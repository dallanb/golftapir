import { BaseActions, NotificationActions } from '@actions';
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
            case constants.TOPICS.MEMBERS:
                switch (event) {
                    case constants.EVENTS.MEMBERS.DISPLAY_NAME_UPDATED:
                        emitter(BaseActions.refreshMe());
                        break;
                    case constants.EVENTS.MEMBERS.COUNTRY_UPDATED:
                        emitter(BaseActions.refreshMe());
                        break;
                }
                break;
            default:
                break;
        }
    };
    return () => {};
};
