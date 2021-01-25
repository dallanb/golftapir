import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        ping: null,
        login: ['email', 'password'],
        loginSuccess: ['data', 'expiry'],
        loginFailure: ['err'],
        register: ['email', 'username', 'password', 'display_name', 'country'],
        registerSuccess: null,
        registerFailure: ['err'],
        verify: ['token'],
        verifySuccess: null,
        verifyFailure: ['err'],
        refresh: null,
        refreshSuccess: ['data', 'expiry'],
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
