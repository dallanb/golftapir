import { ClientProxy } from '@services';
import qs from 'querystring';
import { omitBy as _omitBy, isNil as _isNil } from 'lodash';
import { number } from 'yup';

class Client {
    private _socket?: WebSocket;
    private _reconnectAttempts: number;
    private readonly _url: string;
    private readonly _maxReconnectAttempts: number;
    private readonly _socketOptions: { endpoint: string };
    private _errorHandler: (code: number) => void;

    constructor(
        url: string,
        options?: {
            maxReconnectAttempts?: number;
            errorHandler?: (code: number) => void;
        }
    ) {
        this._url = url;
        this._socket = undefined;
        this._maxReconnectAttempts = options?.maxReconnectAttempts || 10;
        this._reconnectAttempts = 0;
        this._errorHandler =
            options?.errorHandler ||
            function () {
                return undefined;
            };
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

    // Init will return websocket connect status
    async init(uuid?: string): Promise<number | undefined> {
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
                    console.info('unknown closure'); // show notification
                    console.info('reconnecting');
                    this._errorHandler(event.code);
                    if (this._reconnectAttempts < this._maxReconnectAttempts) {
                        setTimeout(() => {
                            this.init();
                            this._incrementReconnectAttempts();
                        }, 1000);
                    }
            }
        };

        return await this._connect();
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
                if (
                    _isNil(this._socket?.readyState) ||
                    this._socket?.readyState > 1
                ) {
                    throw new Error();
                }
                this._socket.send(data);
                resolve();
            } catch (err) {
                reject(err);
            }
        });
    }

    _connect(): Promise<number | undefined> {
        return new Promise((resolve, reject) => {
            if (!this._socket) {
                return reject(this._socket);
            }
            if (this._socket.readyState === this._socket.OPEN) {
                return resolve(this._socket.readyState);
            }

            // wait for the socket to open
            this._socket.onopen = () => resolve(1);
        });
    }

    _incrementReconnectAttempts() {
        this._reconnectAttempts += 1;
    }
}

export default Client;
