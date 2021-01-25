import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getAuth = (state: any) => state.auth;

export const selectData = createSelector([getAuth], (auth) => auth);

export const selectIsLoggedIn = createSelector([getAuth], (auth) =>
    _get(auth, ['isLoggedIn'], false)
);

export const selectForceLogout = createSelector([getAuth], (auth) =>
    _get(auth, ['forceLogout'], false)
);

export const selectAuthData = createSelector([getAuth], (auth) =>
    _get(auth, ['data'], false)
);

export const selectIsVerified = createSelector([getAuth], (auth) =>
    _get(auth, ['isVerified'], undefined)
);

export const selectIsVerifying = createSelector([getAuth], (auth) =>
    _get(auth, ['isVerifying'], undefined)
);
