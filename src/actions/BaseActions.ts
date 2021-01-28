import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        initMe: null,
        initMeSuccess: ['me'],
        initMeFailure: ['err'],
        refreshMe: null,
        refreshMeSuccess: ['me'],
        refreshMyFailure: ['err'],
        initLeagues: null,
        initLeaguesSuccess: ['leagues'],
        initLeaguesFailure: ['err'],
        refreshLeagues: null,
        refreshLeaguesSuccess: ['leagues'],
        refreshLeaguesFailure: ['err'],
        initSockets: ['uuid'],
        initSocketsSuccess: null,
        initSocketsFailure: ['err'],
        refreshSockets: ['uuid'],
        refreshSocketsSuccess: null,
        refreshSocketsFailure: ['err'],
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
