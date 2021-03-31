import Client from './client';
import config from 'config';
import { notification } from 'antd';

class ContestTopicClient extends Client {
    private _key: number;
    constructor(options?: {}) {
        super(config.WS_TOPIC_URL, {
            ...options,
            errorHandler: (code: number) => {
                this._key = code;
                notification.error({
                    key: this._key.toString(),
                    message: 'Unable to connect to live updates',
                    placement: 'bottomRight',
                    duration: 0,
                });
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
        if (!wsStatus) {
            return await this.init(uuid);
        } else if (this._uuid !== uuid) {
            this.terminate();
            return await this.init(uuid);
        }
        return wsStatus;
    }
}

export default new ContestTopicClient();
