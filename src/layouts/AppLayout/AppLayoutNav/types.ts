export interface AppLayoutMenuProps {
    app: string;
    name: string;
    avatar?: string;
    menuProps?: any;
    menuRoutes: any;
    menuItemOnClick?: ({ key }: { key: any }, path: string) => void;
    extra?: any;
}
