export interface MemberAppViewProps {
    name: string;
    avatar: string;
    isInitialized: boolean;
    isLoggedIn: boolean;
    forceLogout: boolean;
    menuProps: {
        icons: { notifications: { pending: number } };
    };
    refresh: () => void;
    init: () => void;
    terminate: () => void;
}
export interface MemberAppViewState {
    selectedKeys: string[];
}
export interface MemberAppProps {}
export interface ComponentRoute {
    path: string;
    component: any;
    exact?: boolean;
}
