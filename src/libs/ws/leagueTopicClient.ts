import Client from './client';
import config from 'config';
import { notification } from 'antd';

class LeagueTopicClient extends Client {
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
}

export default new LeagueTopicClient();
