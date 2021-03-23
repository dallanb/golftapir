import React from 'react';
import { RouteComponentProps } from 'react-router';

export interface AppLayoutProps {}

export interface AppLayoutState {
    selectedKeys: string[];
}

export interface MenuItemRendererProps {
    index: number;
    onClick: (item: any, path: string) => void;
    menuProps: any;
    route: any;
}
