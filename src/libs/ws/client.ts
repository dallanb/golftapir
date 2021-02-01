import { ClientProxy } from '@services';
import qs from 'querystring';
import { omitBy as _omitBy, isNil as _isNil } from 'lodash';

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
    init(uuid?: string): Promise<void> {
        // need to pass JWT in order to not be stopped by KONG Gateway
        const query = qs.stringify(
            _omitBy({ jwt: ClientProxy.accessToken, uuid }, _isNil)
        );

        this.socket = new WebSocket(`${this._url}?${query}`);

        this.socket.onclose = (event) => {
            console.info('socket close event code, ', event.code);
            switch (event.code) {
                case 1000:
                    console.info('normal closure');
                    break;
                default:
                    console.info('reconnecting'); // TODO: FIX THIS TO STOP RECONNECTING AFTER A FEW CONSECUTIVE FAILS
                    setTimeout(() => {
                        this.init();
                    }, 5000);
            }
        };

        return new Promise((resolve, reject) => {
            this._connect(resolve, reject);
        });
    }

    terminate(code: number = 1000): void {
        this.socket?.close(code);
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
