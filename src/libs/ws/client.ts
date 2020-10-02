import config from 'config';
import io from 'socket.io-client';
import Socket = SocketIOClient.Socket;

class Client {
    private _socket?: Socket;
    private readonly _socketOptions: { endpoint: string };

    constructor() {
        this._socket = undefined;
        this._socketOptions = {
            endpoint: config.WS_URL,
        };
    }

    get socket(): Socket | undefined {
        return this._socket;
    }

    set socket(socket: Socket | undefined) {
        this._socket = socket;
    }
    init(user_uuid: string): Promise<void> {
        this.socket = io(config.WS_URL, { query: `user_uuid=${user_uuid}` });

        return new Promise((resolve, reject) => {
            this.socket?.on('connect', () => {
                console.log('connected');
                resolve();
            });

            this.socket?.on('disconnect', () => {
                console.log('disconnected');
                reject();
            });
        });
    }
}

export default new Client();
