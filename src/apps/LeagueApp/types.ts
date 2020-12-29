export interface LeagueAppViewProps {
    name: string;
    avatar: string;
    url: string;
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
export interface LeagueAppProps {
    url: string;
}
export interface ComponentRoute {
    path: string;
    component: any;
    exact?: boolean;
}
