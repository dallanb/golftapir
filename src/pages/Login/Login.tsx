import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import LoginForm from './LoginForm';
import { LoginProps } from './types';
import LoginPageActions from './actions';
import routes from '@constants/routes';
import { selectIsLoggedIn } from '@selectors/AuthSelectors';
import LoginButtons from './LoginButtons';
import './Login.less';
import { navigate } from '@utils';

const Login: React.FunctionComponent<LoginProps> = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const isLoggedIn = useSelector(selectIsLoggedIn);

    useEffect(() => {
        if (isLoggedIn) {
            navigate(history, routes.APPS.MEMBER_APP.ROUTE);
        } else {
            dispatch(LoginPageActions.init());
        }
        return () => {
            if (isLoggedIn) {
                navigate(history, routes.APPS.MEMBER_APP.ROUTE, {});
            }
        };
    }, []);

    useEffect(() => {
        if (isLoggedIn) {
            navigate(history, routes.APPS.MEMBER_APP.ROUTE, {});
        }
    }, [isLoggedIn]);

    return (
        <div className="login-view">
            <LoginForm />
            <LoginButtons />
        </div>
    );
};

export default Login;
