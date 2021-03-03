import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { get as _get } from 'lodash';
import { ForgotPasswordProps } from './types';
import ForgotPasswordFormActions from './actions';
import {
    selectIsInitialized,
    selectIsSubmitted,
    selectIsSubmitting,
} from './selector';
import ComponentContent from '@layouts/ComponentContent';
import { withAppRoute } from '@utils';
import routes from '@constants/routes';
import constants from '@constants';
import { OverlaySpin } from '@components';
import ForgotPasswordForm from './ForgotPasswordForm';
import ForgotPasswordButtons from './ForgotPasswordButtons';
import './ForgotPassword.less';

const ForgotPassword: React.FunctionComponent<ForgotPasswordProps> = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const isInitialized = useSelector(selectIsInitialized);
    const isSubmitted = useSelector(selectIsSubmitted);
    const isSubmitting = useSelector(selectIsSubmitting);

    useEffect(() => {
        dispatch(ForgotPasswordFormActions.init());
        return () => {
            dispatch(ForgotPasswordFormActions.terminate());
        };
    }, []);

    useEffect(() => {
        if (isSubmitted) {
            history.push(
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
            <OverlaySpin visible={isSubmitting} />
        </ComponentContent>
    );
};

export default ForgotPassword;
