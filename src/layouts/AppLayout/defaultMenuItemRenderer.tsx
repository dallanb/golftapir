import React from 'react';
import { Menu } from 'antd';
import { get as _get } from 'lodash';
import { MenuItemRendererProps } from './types';
import { type } from 'os';

const defaultFormRenderer: React.FunctionComponent<MenuItemRendererProps> = ({
    index,
    route: { name, icon, key, path },
    onClick,
    menuProps,
}) => {
    const Icon = React.createElement(icon, {
        data: menuProps,
        value: _get(menuProps, ['icons', key], null),
    });
    let Name = name;
    if (typeof name === 'function') {
        Name = name(_get(menuProps, ['names', key], null));
    }
    let Path = path;
    if (typeof path === 'function') {
        Path = path(_get(menuProps, ['paths', key], null));
    }

    return (
        <Menu.Item
            className="menu-item"
            key={index}
            onClick={(item) => onClick(item, Path)}
        >
            <div className="menu-item-icon"> {Icon}</div>
            <div className="menu-item-name">{Name}</div>
        </Menu.Item>
    );
};

export default defaultFormRenderer;
