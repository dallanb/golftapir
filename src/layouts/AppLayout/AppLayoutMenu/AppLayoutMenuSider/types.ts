export interface AppLayoutMenuSiderProps {
    className?: string;
    selectedKeys: any;
    menuProps: any;
    menuRoutes: any;
    menuItemOnClick: ({ key }: { key: any }, path: string) => void;
}
