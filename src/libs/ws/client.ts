import { ClientProxy } from '@services';
import qs from 'querystring';
import { omitBy as _omitBy, isNil as _isNil } from 'lodash';

class Client {
    private _socket?: WebSocket;
    private _reconnectAttempts: number;
    private readonly _url: string;
    private readonly _maxReconnectAttempts: number;
    private readonly _socketOptions: { endpoint: string };

    constructor(
        url: string,
        options?: {
            maxReconnectAttempts?: number;
        }
    ) {
        this._url = url;
        this._socket = undefined;
        this._maxReconnectAttempts = options?.maxReconnectAttempts || 10;
        this._reconnectAttempts = 0;
        this._socketOptions = {
            endpoint: url,
        };
    }

    get socket(): WebSocket | undefined {
        return this._socket;
    }

    get reconnectAttempts(): number {
        return this._reconnectAttempts;
    }

    get maxReconnectAttempts(): number {
        return this._maxReconnectAttempts;
    }

    init(uuid?: string): Promise<void> {
        // need to pass JWT in order to not be stopped by KONG Gateway
        const query = qs.stringify(
            _omitBy({ jwt: ClientProxy.accessToken, uuid }, _isNil)
        );

        this._socket = new WebSocket(`${this._url}?${query}`);

        this._socket.onclose = (event) => {
            console.info('socket close event code, ', event.code);
            switch (event.code) {
                case 1000:
                    console.info('normal closure');
                    break;
                default:
                    console.info('reconnecting');
                    if (this._reconnectAttempts < this._maxReconnectAttempts) {
                        setTimeout(() => {
                            this.init();
                            this._incrementReconnectAttempts();
                        }, 100);
                    }
            }
        };

        return new Promise((resolve, reject) => {
            this._connect(resolve, reject);
        });
    }

    terminate(code: number = 1000): void {
        this._socket?.close(code);
    }

    status(): number | undefined {
        return this._socket?.readyState;
    }

    send(data: string): Promise<void> {
        return new Promise((resolve, reject) => {
            try {
                if (!this._socket) {
                    throw new Error();
                }
                if (!this.status()) {
                    throw new Error();
                }
                this._socket.send(data);
                resolve();
            } catch (err) {
                reject(err);
            }
        });
    }
    _connect(resolve: () => void, reject: () => void): void {
        if (!this._socket) {
            return reject();
        }
        if (this._socket.readyState === this._socket.OPEN) {
            return resolve();
        }
        this._socket.onopen = () => resolve();
    }

    _incrementReconnectAttempts() {
        this._reconnectAttempts += 1;
    }
}

export default Client;
