import { NotificationActions } from '@actions';

export const socketEventHandlers = (socket: WebSocket, emitter: any) => {
    socket.onmessage = (evt: MessageEvent) => {
        const data = JSON.parse(evt.data);
        console.log(data);
        const [topic, event] = data.event.split(':');
        switch (topic) {
            case 'notification':
                switch (event) {
                    case 'pending':
                        console.log(event);
                        const { count } = data;
                        emitter(NotificationActions.setPending(count));
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
    };
    // 'notification.pending', ({ pending }: { pending: number }) => {
    //         emitter(NotificationActions.setPending({ pending }));
    //     }
    return () => {};
};
