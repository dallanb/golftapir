import React from 'react';
import { useHistory } from 'react-router-dom';
import { ForgotPasswordButtonsProps } from './types';
import {LinkButton} from '@components';
import { withAppRoute } from '@utils';
import routes from '@constants/routes';
import constants from '@constants';
import CONSTANTS from '@locale/en-CA';
import './ForgotPasswordButtons.less';

const ForgotPasswordButtons: React.FunctionComponent<ForgotPasswordButtonsProps> = () => {
    const history = useHistory();
    return (
        <div className="forgot-password-buttons">
            <LinkButton
                onClick={() =>
                    history.push(
                        withAppRoute(routes.ROUTES.LOGIN.ROUTE, {
                            app: constants.APPS.AUTH_APP,
                        })
                    )
                }
                text={CONSTANTS.PAGES.FORGOT_PASSWORD.BUTTONS.LOGIN.TEXT}
                buttonText={
                    CONSTANTS.PAGES.FORGOT_PASSWORD.BUTTONS.LOGIN.BUTTON
                }
                className="login-button"
            />
        </div>
    );
};

export default ForgotPasswordButtons;
