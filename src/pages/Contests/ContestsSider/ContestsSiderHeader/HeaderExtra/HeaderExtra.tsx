import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';
import {
    CaretDownFilled,
    MessageFilled,
    NotificationFilled,
} from '@ant-design/icons';
import { HeaderExtraProps } from './types';
import './HeaderExtra.less';
import constants from '@constants';
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
                        history.push(
                            `/app${constants.ROUTES.NOTIFICATIONS.ROUTE}`
                        )
                    }
                    type="text"
                    icon={
                        <PendingBadge
                            value={{ pending }}
                            icon={NotificationFilled}
                        />
                    }
                />
            </div>
            <div className="header-extra-messages">
                <Button
                    onClick={() =>
                        history.push(`/app${constants.ROUTES.HOME.ROUTE}`)
                    }
                    type="text"
                    icon={<MessageFilled />}
                />
            </div>
            <div className="header-extra-drop-down">
                <Button
                    onClick={() => {}}
                    type="text"
                    icon={<CaretDownFilled />}
                />
            </div>
        </div>
    );
};

export default HeaderExtra;
