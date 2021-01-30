import { FirebaseClient } from '@libs';

function* requestToken() {
    const token = yield FirebaseClient.requestNotificationPermissions();
    return token;
}

export default requestToken;
