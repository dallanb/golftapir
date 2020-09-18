import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        ping: null,
        login: ['email', 'password'],
        loginSuccess: ['data'],
        loginFailure: ['err'],
        register: ['email', 'username', 'password'],
        registerSuccess: null,
        registerFailure: ['err'],
        refresh: null,
        refreshSuccess: ['data'],
        refreshFailure: ['err'],
        logout: null,
        logoutSuccess: null,
        logoutFailure: ['err'],
    },
    {
        prefix: 'AUTH_',
    }
);
export const AuthTypes = Types;
export default Creators;
