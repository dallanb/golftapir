export interface NavMenuCollapsedProps {
    menuProps?: any;
    menuRoutes: any;
    menuItemOnClick: ({ key }: { key: any }, path: string) => void;
    selectedKeys: string[];
}
