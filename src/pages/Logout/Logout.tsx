import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Spin } from 'antd';
import LogoutPageActions from './actions';
import { LogoutProps } from './types';
import routes from '@constants/routes';
import { withAppRoute, navigate } from '@utils';
import constants from '@constants';
import { selectData } from './selector';
import { selectIsLoggedIn, selectIsSubmitting } from '@selectors/AuthSelectors';
import { AppLoading } from '@components';
import { SocketActions } from '@actions';
import { WebSocketContext } from '@contexts';
import './Logout.less';

const Logout: React.FunctionComponent<LogoutProps> = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { isInitialized } = useSelector(selectData);
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isSubmitting = useSelector(selectIsSubmitting);
    const { notificationWs } = useContext(WebSocketContext);

    useEffect(() => {
        dispatch(LogoutPageActions.init());
        return () => {
            dispatch(LogoutPageActions.terminate());
            dispatch(SocketActions.terminate(notificationWs));
        };
    }, []);

    useEffect(() => {
        if (isInitialized && !isLoggedIn && !isSubmitting) {
            navigate(
                history,
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
