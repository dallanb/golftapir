import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ForgotPasswordProps } from './types';
import ForgotPasswordFormActions from './actions';
import {
    selectIsInitialized,
    selectIsSubmitted,
    selectIsSubmitting,
} from './selector';
import ComponentContent from '@layouts/ComponentContent';
import { navigate, withAppRoute } from '@utils';
import routes from '@constants/routes';
import constants from '@constants';
import ForgotPasswordForm from './ForgotPasswordForm';
import ForgotPasswordButtons from './ForgotPasswordButtons';
import { useSpinner } from '@hooks';
import './ForgotPassword.less';

const ForgotPassword: React.FunctionComponent<ForgotPasswordProps> = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const isInitialized = useSelector(selectIsInitialized);
    const isSubmitted = useSelector(selectIsSubmitted);
    const isSubmitting = useSelector(selectIsSubmitting);
    useSpinner(isSubmitting);
    useEffect(() => {
        dispatch(ForgotPasswordFormActions.init());
        return () => {
            dispatch(ForgotPasswordFormActions.terminate());
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
            className="forgot-password-view content-view"
        >
            <ForgotPasswordForm />
            <ForgotPasswordButtons />
        </ComponentContent>
    );
};

export default ForgotPassword;
