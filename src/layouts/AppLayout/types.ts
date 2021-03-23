import React from 'react';
import { RouteComponentProps } from 'react-router';

export interface AppLayoutProps {
    app: string;
    name: string;
    avatar?: string;
    menuProps?: any;
    menuRoutes: any;
    menuItemOnClick?: ({ key }: { key: any }, path: string) => void;
}
export interface AppLayoutState {
    selectedKeys: string[];
}

export interface MenuItemRendererProps {
    index: number;
    onClick: (item: any, path: string) => void;
    menuProps: any;
    route: any;
}
