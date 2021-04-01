import React from 'react';
import { Menu } from 'antd';
import { OverlayMenuProps } from './types';
import './OverlayMenu.less';
import classnames from 'classnames';

const OverlayMenu: React.FunctionComponent<OverlayMenuProps> = ({
    items,
    className,
}) => {
    const renderMenuItems = (
        items: string | JSX.Element | (() => JSX.Element)
    ) => {
        if (typeof items === 'function') {
            return items();
        }

        return items;
    };

    const cx = classnames('overlay-menu', className);
    return <Menu className={cx}>{renderMenuItems(items)}</Menu>;
};

export default OverlayMenu;
