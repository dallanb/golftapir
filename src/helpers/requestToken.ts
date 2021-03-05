import { FirebaseClient } from '@libs';

function* requestToken() {
    return yield FirebaseClient.requestNotificationPermissions();
}

export default requestToken;
