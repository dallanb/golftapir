import firebase from 'firebase/app';
import 'firebase/messaging';
import config from '../../config';

const Messaging = firebase.messaging.Messaging;

class Client {
    private readonly _config: any;
    private _messaging?: Messaging;

    constructor() {
        this._config = config.FIREBASE_CONFIG;
        this._messaging = undefined;
    }

    get messaging(): Messaging | undefined {
        return this._messaging;
    }

    set messaging(messaging) {
        this._messaging = messaging;
    }

    init(): void {
        firebase.initializeApp(this._config);
        this.messaging = firebase.messaging();
        console.info('Firebase Client Ready');
    }

    async requestNotificationPermissions(): Promise<string | undefined> {
        try {
            if (!this.messaging) {
                throw new Error('Wait for Firebase Client to be Ready');
            }
            await this.messaging?.requestPermission();
            return await this.messaging?.getToken();
        } catch (e) {
            console.error(e);
        }
    }

    onMessageListener(): Promise<any> {
        return new Promise((resolve, reject) => {
            if (!this.messaging) {
                reject('Wait for Firebase Client to be Ready');
            }
            this.messaging?.onMessage((payload) => resolve(payload));
        });
    }
}

export default new Client();
