import Client from './client';
import config from 'config';
import { notification } from 'antd';

class NotificationClient extends Client {
    private _key: number;
    constructor(options?: {}) {
        super(config.WS_NOTIFICATION_URL, {
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
                        message: reconnectLimitReached
                            ? 'Unable to connect to live updates'
                            : 'Lost connection to live updates, attempting to reconnect...',
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
    }

    async run(uuid: string) {
        const wsStatus = this.status();
        if (!wsStatus || wsStatus === 3) {
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
}

export default new NotificationClient();
