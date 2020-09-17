export interface MemberAppProps {
    url: string;
    isInitialized: boolean;
    isLoggedIn: boolean;
    forceLogout: boolean;
    refresh: () => void;
    init: () => void;
}
export interface ComponentRoute {
    path: string;
    component: any;
    exact?: boolean;
}
