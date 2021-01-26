import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getResetPasswordPage = (state: any) => state.resetPasswordPage;

export const selectData = createSelector(
    [getResetPasswordPage],
    (resetPasswordPage) => _get(resetPasswordPage, ['data'], false)
);

export const selectIsInitialized = createSelector(
    [getResetPasswordPage],
    (resetPasswordPage) => _get(resetPasswordPage, ['isInitialized'], false)
);

export const selectIsSubmitting = createSelector(
    [getResetPasswordPage],
    (resetPasswordPage) => _get(resetPasswordPage, ['isSubmitting'], false)
);

export const selectIsSubmitted = createSelector(
    [getResetPasswordPage],
    (resetPasswordPage) => _get(resetPasswordPage, ['isSubmitted'], false)
);

export const selectFormInitialValues = createSelector(
    [getResetPasswordPage],
    (resetPasswordPage) => _get(resetPasswordPage, ['formInitialValues'], false)
);
