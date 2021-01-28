import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        initMe: null,
        initMeSuccess: ['data'],
        initMeFailure: ['err'],
        refreshMe: null,
        refreshMeSuccess: ['data'],
        refreshMyFailure: ['err'],
        initLeagues: null,
        initLeaguesSuccess: ['data', 'metadata'],
        initLeaguesFailure: ['err'],
        refreshLeagues: null,
        refreshLeaguesSuccess: ['data', 'metadata'],
        refreshLeaguesFailure: ['err'],
        initSockets: ['uuid'],
        initSocketsSuccess: null,
        initSocketsFailure: ['err'],
        refreshSockets: ['uuid'],
        refreshSocketsSuccess: null,
        refreshSocketsFailure: ['err'],
        terminateSockets: null,
        terminateSocketsSuccess: null,
        terminateSocketsFailure: ['err'],
        initNotifications: null,
        initNotificationsSuccess: null,
        initNotificationFailure: ['err'],
        refreshNotifications: null,
        refreshNotificationsSuccess: null,
        refreshNotificationFailure: ['err'],
    },
    {
        prefix: 'BASE_',
    }
);
export const BaseTypes = Types;
export default Creators;
