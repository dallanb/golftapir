import { ClientProxy } from '@services';

class Client {
    private _url: string;
    private _socket?: WebSocket;
    private readonly _socketOptions: { endpoint: string };

    constructor(url: string) {
        this._url = url;
        this._socket = undefined;
        this._socketOptions = {
            endpoint: url,
        };
    }

    get socket(): WebSocket | undefined {
        return this._socket;
    }

    set socket(socket: WebSocket | undefined) {
        this._socket = socket;
    }
    init(uuid: string): Promise<void> {
        this.socket = new WebSocket(
            `${this._url}?uuid=${uuid}&jwt=${ClientProxy.accessToken}`
        );

        this.socket.onclose = () => {
            console.log('reconnecting');
            // this.socket = new WebSocket(`${config.WS_URL}?uuid=${uuid}`);
            this.init(uuid);
        };

        return new Promise((resolve, reject) => {
            this._connect(resolve, reject);
        });
    }
    _connect(resolve: () => void, reject: () => void): void {
        if (!this.socket) {
            return reject();
        }
        if (this.socket.readyState === this.socket.OPEN) {
            return resolve();
        }
        this.socket.onopen = () => resolve();
    }

    status(): number | undefined {
        return this.socket?.readyState;
    }

    send(data: string): Promise<void> {
        return new Promise((resolve, reject) => {
            try {
                if (!this.socket) {
                    throw new Error();
                }
                if (!this.status()) {
                    throw new Error();
                }
                this.socket.send(data);
                resolve();
            } catch (err) {
                reject(err);
            }
        });
    }
}

export default Client;
