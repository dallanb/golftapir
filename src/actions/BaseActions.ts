import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        initMe: ['league_uuid'],
        initMeSuccess: ['data'],
        initMeFailure: ['err'],
        refreshMe: ['league_uuid'],
        refreshMeSuccess: ['data'],
        refreshMeFailure: ['err'],
        initLeagues: null,
        initLeaguesSuccess: ['data', 'metadata'],
        initLeaguesFailure: ['err'],
        refreshLeagues: null,
        refreshLeaguesSuccess: ['data', 'metadata'],
        refreshLeaguesFailure: ['err'],
        initSockets: ['handlers'],
        initSocketsSuccess: null,
        initSocketsFailure: ['err'],
        refreshSockets: ['handlers'],
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
