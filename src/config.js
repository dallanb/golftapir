const config = {
    ENV: process.env.ENV,
    NODE_ENV: process.env.NODE_ENV,
    PROTOCOL: 'http',
    HOST: '0.0.0.0',
    PORT: 3000,
    AUTH_URL: 'auth.techtapir.com',
    ACCOUNT_URL: 'account.techtapir.com',
    CONTEST_URL: 'contest.techtapir.com',
    CONTESTANT_URL: 'contestant.techtapir.com',
    COURSE_URL: 'course.techtapir.com',
    LEAGUE_URL: 'league.techtapir.com',
    WAGER_URL: 'wager.techtapir.com',
    GOLF_UUID: 'cbfa8bbc-075c-49b1-9f6a-e04b72f41d95',
    // GOLF_UUID: '64580b95-7c99-41e9-921e-fa08c786f6ef',
    NOTIFICATION_URL: 'notification.techtapir.com',
    SCORE_URL: 'score.techtapir.com',
    S3_URL: 'https://golftapir.s3-us-west-2.amazonaws.com',
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
    WS_NOTIFICATION_URL: 'wss://notification.techtapir.com/notification',
    WS_TOPIC_URL: 'wss://notification.techtapir.com/topic',
};

export default config;
