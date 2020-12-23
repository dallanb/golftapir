import React from 'react';
import UserCard from './UserCard';
import UserMenu from './UserMenu';
import UserPopover from './UserPopover';
import { UserTileProps } from './types';
import './UserTile.less';
import { Button } from 'antd';
import { CaretDownFilled } from '@ant-design/icons';

const UserTile: React.FunctionComponent<UserTileProps> = ({ menu }) => {
    return (
        <UserPopover
            title=""
            content={<UserMenu items={menu} />}
            trigger="click"
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
