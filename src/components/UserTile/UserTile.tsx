import React from 'react';
import { Button } from 'antd';
import { UpOutlined } from '@ant-design/icons';
import UserCard from './UserCard';
import UserMenu from './UserMenu';
import UserPopover from './UserPopover';
import { UserTileProps } from './types';
import './UserTile.less';

const UserTile: React.FunctionComponent<UserTileProps> = ({
    name,
    avatar,
    menu,
}) => {
    return (
        <UserPopover
            title={<UserCard name={name} avatar={avatar} />}
            content={<UserMenu items={menu} />}
            trigger="click"
        >
            <Button className="user-tile-button">
                <UserCard name={name} avatar={avatar} />
            </Button>
        </UserPopover>
    );
};

export default UserTile;
