import Client from './client';
import config from 'Config';
import { notification } from 'antd';

class ContestTopicClient extends Client {
    private _key: number;
    private _runAttempts: number;
    private readonly _maxRunAttempts: number;

    constructor(options?: { maxRunAttempts?: number }) {
        super(config.WS_TOPIC_URL, {
            ...options,
            errorHandler: (code: number, reconnectLimitReached: boolean) => {
                this._key = code;
                if (reconnectLimitReached) {
                    notification.destroy();
                    notification.error({
                        key: this._key.toString(),
                        message:
                            'Unable to connect to live updates. Click to try and reconnect.',
                        placement: 'bottomRight',
                        duration: 0,
                        onClick: () => {
                            this._resetReconnectAttempts();
                            this.reconnect();
                        },
                    });
                } else {
                    // notification.close(`error_${this._key.toString()}`);
                    notification.warn({
                        key: this._key.toString(),
                        message:
                            'Lost connection to live updates, attempting to reconnect...',
                        placement: 'bottomRight',
                        duration: 0,
                    });
                }
            },
            reconnectHandler: () => {
                notification.close(this._key.toString());
                notification.success({
                    key: this._key.toString(),
                    message: 'Reconnected to live updates',
                    placement: 'bottomRight',
                    duration: 5,
                });
            },
        });
        this._key = 0;
        this._maxRunAttempts = options?.maxRunAttempts || 5;
        this._runAttempts = 0;
    }

    get runAttempts(): number {
        return this._runAttempts;
    }

    get maxRunAttempts(): number {
        return this._maxRunAttempts;
    }

    async run(uuid: string) {
        if (this._runAttempts >= this._maxRunAttempts) {
            console.error('max run attempts reached');
        }
        this._incrementRunAttempts();
        const wsStatus = this.status();
        if (!wsStatus) {
            this._resetRunAttempts();
            return await this.init(uuid);
        } else if (this._uuid !== uuid) {
            // close an existing socket and open a new one
            this._resetRunAttempts();
            this.terminate();
            return await this.init(uuid);
        } else if (wsStatus === WebSocket.CLOSED && this._uuid === uuid) {
            // reopen a closed socket
            this._resetRunAttempts();
            return await this.init(uuid);
        } else if (wsStatus === WebSocket.CLOSING && this._uuid === uuid) {
            // wait for a socket to close and then reopen
            while (this.status() === WebSocket.CLOSING) {
                if (this._runAttempts >= this._maxRunAttempts) {
                    return WebSocket.CLOSED;
                }
                await new Promise(resolve => setTimeout(resolve, 100));
                this._incrementRunAttempts();
            }
            this._resetRunAttempts();
            return await this.init(uuid);
        }

        return wsStatus;
    }

    stop() {
        const wsStatus = this.status();
        if (wsStatus) {
            return this.terminate();
        }
    }

    _incrementRunAttempts() {
        this._runAttempts += 1;
    }

    _resetRunAttempts() {
        this._runAttempts = 0;
    }
}

export default new ContestTopicClient();
