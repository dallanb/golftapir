import Socket = SocketIOClient.Socket;
import { NotificationActions } from '@actions';

export const socketEventHandlers = (socket: Socket, emitter: any) => {
    socket.on('notification.pending', ({ pending }: { pending: number }) => {
        emitter(NotificationActions.setPending({ pending }));
    });
    return () => {};
};
