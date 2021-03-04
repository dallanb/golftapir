import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Spin } from 'antd';
import LogoutPageActions from './actions';
import { LogoutProps } from './types';
import routes from '@constants/routes';
import { withAppRoute } from '@utils';
import constants from '@constants';
import { selectData } from './selector';
import { selectIsLoggedIn, selectIsSubmitting } from '@selectors/AuthSelectors';
import { AppLoading } from '@components';
import './Logout.less';

const Logout: React.FunctionComponent<LogoutProps> = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { isInitialized } = useSelector(selectData);
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isSubmitting = useSelector(selectIsSubmitting);

    useEffect(() => {
        dispatch(LogoutPageActions.init());
        return () => {
            dispatch(LogoutPageActions.terminate());
        };
    }, []);

    useEffect(() => {
        if (isInitialized && !isLoggedIn && !isSubmitting) {
            history.push(
                withAppRoute(routes.ROUTES.LOGIN.ROUTE, {
                    app: constants.APPS.AUTH_APP,
                })
            );
        }
    }, [isInitialized, isLoggedIn, isSubmitting]);

    if (!isInitialized) return <Spin />;
    if (isSubmitting) return <AppLoading />;
    return null;
};

export default Logout;
