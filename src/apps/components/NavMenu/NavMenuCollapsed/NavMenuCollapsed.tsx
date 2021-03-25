import React, { useState } from 'react';
import { Button, Dropdown } from 'antd';
import OverlayMenu from '@apps/components/OverlayMenu';
import { MenuOutlined } from '@ant-design/icons';
import defaultMenuItemRenderer from './defaultMenuItemRenderer';
import { NavMenuCollapsedProps } from './types';
import './NavMenuCollapsed.less';

const NavMenuCollapsed: React.FunctionComponent<NavMenuCollapsedProps> = ({
    menuRoutes,
    menuProps,
    menuItemOnClick,
    selectedKeys,
}) => {
    const [visible, setVisible] = useState(false);

    const menuItemsRenderer = (
        rendererMenuRoutes: any,
        rendererMenuProps: any,
        selectedKeys: string[]
    ) => {
        return rendererMenuRoutes.map((route: any, index: number) =>
            defaultMenuItemRenderer({
                index,
                onClick: (...props) => {
                    menuItemOnClick(...props);
                    setVisible(false);
                },
                route,
                menuProps: rendererMenuProps,
                selectedKeys,
            })
        );
    };
    return (
        <Dropdown
            overlay={
                <OverlayMenu
                    items={menuItemsRenderer(
                        menuRoutes,
                        menuProps,
                        selectedKeys
                    )}
                />
            }
            trigger={['click']}
            visible={visible}
            overlayClassName="menu-drop-down-overlay"
        >
            <Button
                type="text"
                icon={<MenuOutlined />}
                onClick={() => setVisible(!visible)}
                className=""
            />
        </Dropdown>
    );
};

export default NavMenuCollapsed;
