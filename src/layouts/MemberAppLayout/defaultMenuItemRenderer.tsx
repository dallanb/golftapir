import React from 'react';
import { Menu } from 'antd';
import { get as _get } from 'lodash';
import { MenuItemRendererProps } from './types';

const defaultFormRenderer: React.FunctionComponent<MenuItemRendererProps> = ({
    index,
    route: { name: Name, icon, key, path },
    onClick,
    menuProps,
}) => {
    const Icon = React.createElement(icon, {
        data: menuProps,
        value: _get(menuProps, ['icons', key], null),
    });

    return (
        <Menu.Item
            className="menu-item"
            key={index}
            onClick={(item) => onClick(item, path)}
        >
            <div className="menu-item-icon"> {Icon}</div>
            <div className="menu-item-name">{Name}</div>
        </Menu.Item>
    );
};

export default defaultFormRenderer;
