import React from 'react';
import { useHistory } from 'react-router-dom';
import { RegisterButtonsProps } from './types';
import {LinkButton} from '@components';
import { withAppRoute } from '@utils';
import routes from '@constants/routes';
import constants from '@constants';
import CONSTANTS from '@locale/en-CA';
import './RegisterButtons.less';

const RegisterButtons: React.FunctionComponent<RegisterButtonsProps> = () => {
    const history = useHistory();
    return (
        <div className="register-buttons">
            <LinkButton
                onClick={() =>
                    history.push(
                        withAppRoute(routes.ROUTES.LOGIN.ROUTE, {
                            app: constants.APPS.AUTH_APP,
                        })
                    )
                }
                text={CONSTANTS.PAGES.REGISTER.BUTTONS.LOGIN.TEXT}
                buttonText={CONSTANTS.PAGES.REGISTER.BUTTONS.LOGIN.BUTTON}
                className="login-button"
            />
        </div>
    );
};

export default RegisterButtons;
