import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { get as _get } from 'lodash';
import { RegisterProps } from './types';
import RegisterFormActions from './actions';
import RegisterForm from './RegisterForm';
import { selectIsInitialized, selectIsRegistered } from './selector';
import { selectIsSubmitting } from '@selectors/AuthSelectors';
import { navigate, withAppRoute } from '@utils';
import routes from '@constants/routes';
import constants from '@constants';
import ComponentContent from '@layouts/ComponentContent';
import RegisterButtons from './RegisterButtons';
import { ModalActions } from '@actions';
import { bodyRenderer, headerRenderer } from './VerifyEmailModal';
import { useSpinner } from '@hooks';
import './Register.less';

const Register: React.FunctionComponent<RegisterProps> = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const search = _get(history, ['location', 'search'], '');
    const params = new URLSearchParams(search);
    const token = params.get('token');
    const isRegistered = useSelector(selectIsRegistered);
    const isInitialized = useSelector(selectIsInitialized);
    const isSubmitting = useSelector(selectIsSubmitting);
    useSpinner(isSubmitting);

    useEffect(() => {
        dispatch(RegisterFormActions.init(token));
        return () => {
            dispatch(RegisterFormActions.terminate());
        };
    }, []);

    useEffect(() => {
        if (isRegistered) {
            navigate(
                history,
                withAppRoute(routes.ROUTES.LOGIN.ROUTE, {
                    app: constants.APPS.AUTH_APP,
                })
            );
            if (!token) {
                dispatch(ModalActions.openModal(headerRenderer, bodyRenderer));
            }
        }
    }, [isRegistered]);

    return (
        <ComponentContent
            showSpinner={!isInitialized}
            className="register-view content-view"
        >
            <RegisterForm />
            <RegisterButtons />
        </ComponentContent>
    );
};

export default Register;
