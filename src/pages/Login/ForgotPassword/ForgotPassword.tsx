import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';
import { ForgotPasswordProps } from './types';
import './ForgotPassword.less';
import { withAppRoute } from '@utils';
import routes from '@constants/routes';
import constants from '@constants';
import CONSTANTS from '@locale/en-CA';

const ForgotPassword: React.FunctionComponent<ForgotPasswordProps> = () => {
    const history = useHistory();
    const onClick = () => {
        history.push(
            withAppRoute(routes.ROUTES.FORGOT_PASSWORD.ROUTE, {
                app: constants.APPS.AUTH_APP,
            })
        );
    };
    return (
        <div className="forgot-password">
            <Button
                type="link"
                onClick={onClick}
                className="forgot-password-anchor"
            >
                {CONSTANTS.PAGES.LOGIN.BUTTONS.FORGOT_PASSWORD}
            </Button>
        </div>
    );
};

export default ForgotPassword;
