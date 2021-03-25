import React from 'react';
import { Menu } from 'antd';
import { get as _get } from 'lodash';
import { MenuItemRendererProps } from '@layouts/AppLayout/types';
import { type } from 'os';

const defaultFormRenderer: React.FunctionComponent<MenuItemRendererProps> = ({
    index,
    route: { name, icon, iconSelected, key, path, disabled = -1, hidden = -1 },
    onClick,
    menuProps,
    selectedKeys,
}) => {
    const isSelected = selectedKeys.includes(index.toString());

    const Icon = React.createElement(icon, {
        data: menuProps,
        value: _get(menuProps, ['icons', key], null),
    });
    const IconSelected = iconSelected && React.createElement(iconSelected);
    let Name = name;
    if (typeof name === 'function') {
        Name = name(_get(menuProps, ['names', key], null));
    }
    let Path = path;
    if (typeof path === 'function') {
        Path = path(_get(menuProps, ['paths', key], null));
    }

    const role = _get(menuProps, ['role'], null);
    const rbacProps = {
        disabled: false,
    };
    if (role !== null) {
        rbacProps.disabled = role < disabled;
    }

    return (
        <Menu.Item
            className="menu-item"
            key={index}
            onClick={(item) => onClick(item, Path)}
            icon={isSelected && IconSelected ? IconSelected : Icon}
            {...rbacProps}
        >
            <span className="menu-item-name">{Name}</span>
        </Menu.Item>
    );
};

export default defaultFormRenderer;
