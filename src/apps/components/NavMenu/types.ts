export interface NavMenuProps {
    app: string;
    menuProps?: any;
    menuRoutes: any;
    menuItemOnClick?: ({ key }: { key: any }, path: string) => void;
}
