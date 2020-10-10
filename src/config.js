const config = {
    ENV: process.env.ENV,
    NODE_ENV: process.env.NODE_ENV,
    PROTOCOL: 'http',
    HOST: '0.0.0.0',
    PORT: 3000,
    AUTH_URL: 'auth.techtapir.com',
    ACCOUNT_URL: 'account.techtapir.com',
    CONTEST_URL: 'contest.techtapir.com',
    WAGER_URL: 'wager.techtapir.com',
    GOLF_UUID: 'ede9c78f-025f-44e1-8a75-78c9a6772929',
    NOTIFICATION_URL: 'notification.techtapir.com',
    S3_URL: 'https://golftapir.s3-us-west-2.amazonaws.com/account/avatars/',
    FIREBASE_CONFIG: {
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        databaseURL: process.env.FIREBASE_DATABASE_URL,
        projectId: process.env.FIREBASE_PROJECT_ID,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.FIREBASE_APP_ID,
        measurementId: process.env.FIREBASE_MEASUREMENT_ID,
    },
    WS_URL: 'wss://notification.techtapir.com',
};

export default config;
