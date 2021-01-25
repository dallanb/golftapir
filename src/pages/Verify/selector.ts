import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getVerifyPage = (state: any) => state.verifyPage;

export const selectData = createSelector([getVerifyPage], (verifyPage) =>
    _get(verifyPage, ['data'], false)
);

export const selectIsInitialized = createSelector(
    [getVerifyPage],
    (verifyPage) => _get(verifyPage, ['isInitialized'], false)
);

export const selectIsVerified = createSelector([getVerifyPage], (verifyPage) =>
    _get(verifyPage, ['isVerified'], false)
);
