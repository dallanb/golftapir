import { createSelector } from 'reselect';
import _ from 'lodash';

const getAuth = (state: any) => state.auth;

export const selectIsLoggedIn = createSelector([getAuth], (auth) =>
    _.get(auth, ['isLoggedIn'], false)
);

export const selectForceLogout = createSelector([getAuth], (auth) =>
    _.get(auth, ['forceLogout'], false)
);
