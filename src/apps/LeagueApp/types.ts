import { RouteComponentProps } from 'react-router';

export interface LeagueAppViewProps extends RouteComponentProps {
    leagueUUID: string;
    name: string;
    avatar: string;
    isReady: boolean;
    isLoggedIn: boolean;
    forceLogout: boolean;
    menuProps: any;
    refresh: (uuid: string) => void;
    preInit: (league: any) => void;
    init: (uuid: string) => void;
    terminate: () => void;
    refreshAuth: () => void;
}

export interface LeagueAppViewState {
    selectedKeys: string[];
}
export interface LeagueAppProps {}
export interface ComponentRoute {
    path: string;
    component: any;
    exact?: boolean;
}
