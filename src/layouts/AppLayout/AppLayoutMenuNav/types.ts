export interface AppLayoutMenuNavProps {
    selectedKeys: any;
    menuProps: any;
    menuRoutes: any;
    menuItemOnClick: ({ key }: { key: any }, path: string) => void;
}
