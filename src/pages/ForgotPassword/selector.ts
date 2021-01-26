import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getForgotPasswordPage = (state: any) => state.forgotPasswordPage;

export const selectData = createSelector(
    [getForgotPasswordPage],
    (forgotPasswordPage) => _get(forgotPasswordPage, ['data'], false)
);

export const selectIsInitialized = createSelector(
    [getForgotPasswordPage],
    (forgotPasswordPage) => _get(forgotPasswordPage, ['isInitialized'], false)
);

export const selectIsSubmitting = createSelector(
    [getForgotPasswordPage],
    (forgotPasswordPage) => _get(forgotPasswordPage, ['isSubmitting'], false)
);

export const selectIsSubmitted = createSelector(
    [getForgotPasswordPage],
    (forgotPasswordPage) => _get(forgotPasswordPage, ['isSubmitted'], false)
);

export const selectFormInitialValues = createSelector(
    [getForgotPasswordPage],
    (forgotPasswordPage) =>
        _get(forgotPasswordPage, ['formInitialValues'], false)
);
