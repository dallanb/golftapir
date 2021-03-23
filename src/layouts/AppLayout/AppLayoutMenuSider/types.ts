export interface AppLayoutMenuSiderProps {
    selectedKeys: any;
    menuProps: any;
    menuRoutes: any;
    menuItemOnClick: ({ key }: { key: any }, path: string) => void;
}
