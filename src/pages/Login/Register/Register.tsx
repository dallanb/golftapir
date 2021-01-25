import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';
import { RegisterProps } from './types';
import CONSTANTS from '@locale/en-CA';
import { withAppRoute } from '@utils';
import routes from '@constants/routes';
import constants from '@constants';
import './Register.less';

const Register: React.FunctionComponent<RegisterProps> = () => {
    const history = useHistory();
    const onClick = () => {
        history.push(
            withAppRoute(routes.ROUTES.REGISTER.ROUTE, {
                app: constants.APPS.AUTH_APP,
            })
        );
    };
    return (
        <div className="register">
            <Button type="link" onClick={onClick} className="register-anchor">
                {CONSTANTS.PAGES.LOGIN.BUTTONS.REGISTER}
            </Button>
        </div>
    );
};
export default Register;
