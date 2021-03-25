import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import classnames from 'classnames';
import { Layout } from 'antd';
import { AppLayoutMenuProps } from './types';
import { navigate, withAppRoute } from '@utils';
import routes from '@constants/routes';
import constants from '@constants';
import './AppLayoutNav.less';

const { Header } = Layout;

const AppLayoutNav: React.FunctionComponent<AppLayoutMenuProps> = ({
    menu,
    extra,
}) => {
    const history = useHistory();
    const _ = useLocation(); // this is necessary to ensure that updated location result in a rerender of the component

    const cx = classnames('app-nav-header', 'app-nav-menu');

    return (
        <Header className={cx}>
            <div
                className="app-nav-title"
                onClick={() =>
                    navigate(
                        history,
                        withAppRoute(routes.ROUTES.HOME.ROUTE, {
                            app: constants.APPS.MEMBER_APP,
                        })
                    )
                }
            />
            <div className="app-nav-menu">{menu}</div>
            <div className="app-nav-extra">{extra}</div>
        </Header>
    );
};

export default AppLayoutNav;
