import { createSelector } from 'reselect';
import {get as _get} from 'lodash';

const getAuth = (state: any) => state.auth;

export const selectIsLoggedIn = createSelector([getAuth], (auth) =>
    _get(auth, ['isLoggedIn'], false)
);

export const selectForceLogout = createSelector([getAuth], (auth) =>
    _get(auth, ['forceLogout'], false)
);

export const selectData = createSelector([getAuth], (auth) =>
    _get(auth, ['data'], false)
);
