export interface MemberAppProps {
    name: string;
    avatar: string;
    url: string;
    isInitialized: boolean;
    isLoggedIn: boolean;
    forceLogout: boolean;
    refresh: () => void;
    init: () => void;
    terminate: () => void;
}
export interface ComponentRoute {
    path: string;
    component: any;
    exact?: boolean;
}