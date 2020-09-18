import React from 'react';
import { Menu } from 'antd';
import { UserMenuProps } from './types';
import './UserMenu.scss';

const UserMenu: React.FunctionComponent<UserMenuProps> = ({ items }) => {
    const renderMenuItems = (
        items: string | JSX.Element | (() => JSX.Element)
    ) => {
        if (typeof items === 'function') {
            return items();
        }
        return items;
    };

    return <Menu>{renderMenuItems(items)}</Menu>;
};

export default UserMenu;
