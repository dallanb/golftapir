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
    containerRef,
}) => {
    const history = useHistory();
    const _ = useLocation(); // this is necessary to ensure that updated location result in a rerender of the component
    const cx = classnames('app-layout-nav-header');

    return (
        <Header className={cx}>
            <div ref={containerRef} className="app-layout-nav-container">
                <div
                    className="app-layout-nav-title"
                    onClick={() =>
                        navigate(
                            history,
                            withAppRoute(routes.ROUTES.HOME.ROUTE, {
                                app: constants.APPS.MEMBER_APP,
                            })
                        )
                    }
                />
                <div className="app-layout-nav-menu">{menu}</div>
                <div className="app-layout-nav-extra">{extra}</div>
            </div>
        </Header>
    );
};

export default AppLayoutNav;
