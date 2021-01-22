import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getRegisterPage = (state: any) => state.registerPage;

export const selectData = createSelector([getRegisterPage], (registerPage) =>
    _get(registerPage, ['data'], false)
);

export const selectIsInitialized = createSelector(
    [getRegisterPage],
    (registerPage) => _get(registerPage, ['isInitialized'], false)
);

export const selectIsRegistered = createSelector(
    [getRegisterPage],
    (registerPage) => _get(registerPage, ['isRegistered'], false)
);
