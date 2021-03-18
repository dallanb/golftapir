import React from 'react';
import UserMenu from './UserMenu';
import UserPopover from './UserPopover';
import { UserTileProps } from './types';
import './UserTile.less';
import { Button } from 'antd';
import { CaretDownFilled } from '@ant-design/icons';

const UserTile: React.FunctionComponent<UserTileProps> = ({
    menu,
    popoverClassName,
    popoverOverlayClassName,
}) => {
    return (
        <UserPopover
            title=""
            content={<UserMenu items={menu} />}
            trigger="click"
            className={popoverClassName}
            overlayClassName={popoverOverlayClassName}
        >
            <Button
                type="text"
                icon={<CaretDownFilled />}
                className="drop-down-button"
            />
        </UserPopover>
    );
};

export default UserTile;
