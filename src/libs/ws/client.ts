import { ClientProxy } from '@services';
import qs from 'querystring';
import { omitBy as _omitBy, isNil as _isNil } from 'lodash';

class Client {
    private _socket?: WebSocket;
    private _reconnectAttempts: number;
    private readonly _url: string;
    private readonly _maxReconnectAttempts: number;
    private readonly _socketOptions: { endpoint: string };
    private readonly _errorHandler: (
        code: number,
        reconnectLimitReached: boolean
    ) => void;
    private readonly _reconnectHandler: () => void;
    protected _uuid: string | undefined;

    constructor(
        url: string,
        options?: {
            maxReconnectAttempts?: number;
            errorHandler?: (
                code: number,
                reconnectLimitReached: boolean
            ) => void;
            reconnectHandler?: () => void;
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
        this._reconnectHandler =
            options?.reconnectHandler ||
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
    async init(
        uuid?: string
        // isReconnect?: boolean
    ): Promise<number | undefined> {
        this._uuid = uuid;
        // need to pass JWT in order to not be stopped by KONG Gateway
        const query = qs.stringify(
            _omitBy({ jwt: ClientProxy.accessToken, uuid: this._uuid }, _isNil)
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
                    this._errorHandler(
                        event.code,
                        this._reconnectAttempts >= this._maxReconnectAttempts
                    );
                    this.reconnect();
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

    async reconnect(): Promise<void> {
        console.info('reconnecting');
        if (this._reconnectAttempts < this._maxReconnectAttempts) {
            setTimeout(async () => {
                this._incrementReconnectAttempts();
                const status = await this.init(this._uuid);
                if (status == 1) {
                    // socket is open
                    this._reconnectHandler();
                    this._resetReconnectAttempts();
                }
            }, 1000);
        }
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

    _resetReconnectAttempts() {
        this._reconnectAttempts = 0;
    }
}

export default Client;
