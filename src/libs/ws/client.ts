import config from 'config';

class Socket {
    constructor() {}
    init() {
        const socket = new WebSocket(config.WS_URL);
    }
}

export default new Socket();
