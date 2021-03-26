import React from 'react';
import { Menu } from 'antd';
import { get as _get } from 'lodash';
import { MenuItemRendererProps } from '@layouts/AppLayout/types';
import { CheckOutlined } from '@ant-design/icons';

const defaultMenuItemRenderer: React.FunctionComponent<MenuItemRendererProps> = ({
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
            key={index}
            onClick={(item) => onClick(item, Path)}
            {...rbacProps}
        >
            <div className="collapsed-menu-item">
                <div className="collapsed-menu-item-avatar">
                    {isSelected && IconSelected ? IconSelected : Icon}
                </div>
                <div className="collapsed-menu-item-name">{Name}</div>
                <div className="collapsed-menu-item-selected">
                    {isSelected && <CheckOutlined />}
                </div>
            </div>
        </Menu.Item>
    );
};

export default defaultMenuItemRenderer;
