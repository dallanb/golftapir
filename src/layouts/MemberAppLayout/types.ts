import React from 'react';
import { RouteComponentProps } from 'react-router';

export interface MemberAppLayoutProps extends RouteComponentProps<any> {
    app: string;
    name: string;
    avatar?: string;
    menuProps?: any;
    menuRoutes: any;
    menuItemRenderer?: React.FunctionComponent<MenuItemRendererProps>;
    menuItemOnClick?: ({ key }: { key: any }, path: string) => void;
    selectedKeys?: string[];
}
export interface MemberAppLayoutState {
    selectedKeys: string[];
}

export interface MenuItemRendererProps {
    index: number;
    onClick: (item: any, path: string) => void;
    menuProps: any;
    route: any;
}
