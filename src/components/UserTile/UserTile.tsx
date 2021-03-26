import React from 'react';
import UserMenu from './UserMenu';
import { Button, Dropdown } from 'antd';
import { CaretDownFilled } from '@ant-design/icons';
import { UserTileProps } from './types';
import './UserTile.less';

const UserTile: React.FunctionComponent<UserTileProps> = ({
    menu,
    overlayClassName,
}) => {
    return (
        <Dropdown
            overlay={<UserMenu items={menu} />}
            trigger={['click']}
            overlayClassName={overlayClassName}
        >
            <Button
                type="text"
                icon={<CaretDownFilled />}
                className="drop-down-button"
            />
        </Dropdown>
    );
};

export default UserTile;
