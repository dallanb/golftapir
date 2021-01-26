import React from 'react';
import { useHistory } from 'react-router-dom';
import { LoginButtonsProps } from './types';
import LinkButton from '@components/LinkButton/LinkButton';
import { withAppRoute } from '@utils';
import routes from '@constants/routes';
import constants from '@constants';
import CONSTANTS from '@locale/en-CA';
import './LoginButtons.less';

const LoginButtons: React.FunctionComponent<LoginButtonsProps> = () => {
    const history = useHistory();
    return (
        <div className="login-buttons">
            <LinkButton
                onClick={() =>
                    history.push(
                        withAppRoute(routes.ROUTES.REGISTER.ROUTE, {
                            app: constants.APPS.AUTH_APP,
                        })
                    )
                }
                text={CONSTANTS.PAGES.LOGIN.BUTTONS.REGISTER.TEXT}
                buttonText={CONSTANTS.PAGES.LOGIN.BUTTONS.REGISTER.BUTTON}
                className="register-button"
            />
            <LinkButton
                onClick={() =>
                    history.push(
                        withAppRoute(routes.ROUTES.FORGOT_PASSWORD.ROUTE, {
                            app: constants.APPS.AUTH_APP,
                        })
                    )
                }
                text={CONSTANTS.PAGES.LOGIN.BUTTONS.FORGOT_PASSWORD.TEXT}
                buttonText={
                    CONSTANTS.PAGES.LOGIN.BUTTONS.FORGOT_PASSWORD.BUTTON
                }
                className="forgot-password-button"
            />
        </div>
    );
};

export default LoginButtons;
