import React from 'react';
import { Menu } from 'antd';
import { LeaguesMenuProps } from './types';
import './LeaguesMenu.less';

const LeaguesMenu: React.FunctionComponent<LeaguesMenuProps> = ({ items }) => {
    const renderMenuItems = (
        items: string | JSX.Element | (() => JSX.Element)
    ) => {
        if (typeof items === 'function') {
            return items();
        }

        return items;
    };

    return <Menu className="leagues-menu">{renderMenuItems(items)}</Menu>;
};

export default LeaguesMenu;
