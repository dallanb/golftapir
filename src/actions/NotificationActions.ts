import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        setToken: ['uuid', 'token'],
        setTokenSuccess: null,
        setTokenFailure: ['err'],
    },
    {
        prefix: 'NOTIFICATION_',
    }
);
export const NotificationTypes = Types;
export default Creators;
