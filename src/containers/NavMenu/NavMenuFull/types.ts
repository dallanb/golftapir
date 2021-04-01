export interface NavMenuFullProps {
    menuProps?: any;
    menuRoutes: any;
    menuItemOnClick: ({ key }: { key: any }, path: string) => void;
    selectedKeys: string[];
}
