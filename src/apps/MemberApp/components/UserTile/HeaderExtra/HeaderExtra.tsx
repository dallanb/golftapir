import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';
import {
    CaretDownFilled,
    MessageFilled,
    NotificationFilled,
    UserOutlined,
} from '@ant-design/icons';
import { HeaderExtraProps } from './types';
import './HeaderExtra.less';
import routes from '@constants/routes';
import { PendingBadge } from '@components';
import { selectPending } from '@selectors/NotificationSelector';
import { useSelector } from 'react-redux';

const HeaderExtra: React.FunctionComponent<HeaderExtraProps> = () => {
    const history = useHistory();
    const pending = useSelector(selectPending);
    return (
        <div className="header-extra">
            <div className="header-extra-notification">
                <Button
                    onClick={() =>
                        history.push(`/app${routes.NOTIFICATIONS.ROUTE}`)
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
                <Button
                    onClick={() => {}}
                    type="text"
                    icon={<CaretDownFilled />}
                    className="drop-down-button"
                />
            </div>
        </div>
    );
};

export default HeaderExtra;
