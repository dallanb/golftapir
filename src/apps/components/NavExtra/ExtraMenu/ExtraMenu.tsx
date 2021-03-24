import React from 'react';
import { Menu } from 'antd';
import { ExtraMenuProps } from './types';
import './ExtraMenu.less';

const ExtraMenu: React.FunctionComponent<ExtraMenuProps> = ({ items }) => {
    const renderMenuItems = (
        items: string | JSX.Element | (() => JSX.Element)
    ) => {
        if (typeof items === 'function') {
            return items();
        }

        return items;
    };

    return <Menu className="extra-menu">{renderMenuItems(items)}</Menu>;
};

export default ExtraMenu;
