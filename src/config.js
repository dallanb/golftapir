const config = {
    ENV: process.env.ENV,
    NODE_ENV: process.env.NODE_ENV,
    PROTOCOL: 'http',
    HOST: '0.0.0.0',
    PORT: 3000,
    AUTH_URL: 'auth.techtapir.com',
    ACCOUNT_URL: 'account.techtapir.com',
    CONTEST_URL: 'contest.techtapir.com',
    MEMBER_URL: 'member.techtapir.com',
    COURSE_URL: 'course.techtapir.com',
    LEAGUE_URL: 'league.techtapir.com',
    WAGER_URL: 'wager.techtapir.com',
    GOLF_UUID: 'c7d5d15a-6c70-46c0-9d8d-9396f03243a6', // TODO: fix this, it is awful!
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
    MAX_LEAGUE_MEMBERS: 10,
};

export default config;
