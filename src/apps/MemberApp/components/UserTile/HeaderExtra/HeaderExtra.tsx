import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Menu } from 'antd';
import { NotificationFilled } from '@ant-design/icons';
import { HeaderExtraProps } from './types';
import routes from '@constants/routes';
import { PendingBadge, UserTile } from '@components';
import { selectPending } from '@selectors/NotificationSelector';
import { useSelector } from 'react-redux';
import './HeaderExtra.less';

const HeaderExtra: React.FunctionComponent<HeaderExtraProps> = ({ user }) => {
    const history = useHistory();
    const pending = useSelector(selectPending);

    const getUserTileMenuItems = () => (
        <Menu.Item key="logout" onClick={() => history.push(`/auth/logout`)}>
            Log out{' '}
            <span className="header-extra-username">{user.username}</span>
        </Menu.Item>
    );

    return (
        <div className="header-extra">
            <div className="header-extra-notification">
                <Button
                    onClick={() =>
                        history.push(routes.MEMBER_APP.NOTIFICATIONS.ROUTE)
                    }
                    type="text"
                    icon={
                        <PendingBadge
                            value={{ pending }}
                            icon={NotificationFilled}
                        />
                    }
                    className="notification-button"
                />
            </div>
            <div className="header-extra-drop-down">
                <UserTile menu={getUserTileMenuItems} />
            </div>
        </div>
    );
};

export default HeaderExtra;
