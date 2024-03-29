import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ResetPasswordProps } from './types';
import ResetPasswordFormActions from './actions';
import {
    selectIsInitialized,
    selectIsSubmitted,
    selectIsSubmitting,
} from './selector';
import ComponentContent from '@layouts/ComponentContent';
import { navigate, withAppRoute } from '@utils';
import routes from '@constants/routes';
import constants from '@constants';
import { useSpinner } from '@hooks';
import ResetPasswordForm from './ResetPasswordForm';
import './ResetPassword.less';

const ResetPassword: React.FunctionComponent<ResetPasswordProps> = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const isInitialized = useSelector(selectIsInitialized);
    const isSubmitted = useSelector(selectIsSubmitted);
    const isSubmitting = useSelector(selectIsSubmitting);
    useSpinner(isSubmitting);
    useEffect(() => {
        dispatch(ResetPasswordFormActions.init());
        return () => {
            dispatch(ResetPasswordFormActions.terminate());
        };
    }, []);

    useEffect(() => {
        if (isSubmitted) {
            navigate(
                history,
                withAppRoute(routes.ROUTES.LOGIN.ROUTE, {
                    app: constants.APPS.AUTH_APP,
                })
            );
        }
    }, [isSubmitted]);

    return (
        <ComponentContent
            showSpinner={!isInitialized}
            className="reset-password-view content-view"
        >
            <ResetPasswordForm />
        </ComponentContent>
    );
};

export default ResetPassword;
