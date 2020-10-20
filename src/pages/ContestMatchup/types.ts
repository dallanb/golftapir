import { RouteComponentProps } from 'react-router';

export interface ContestMatchupProps extends RouteComponentProps {
    init: (uuid: string) => void;
    terminate: () => void;
    title: string;
    description: string;
    isInitialized: boolean;
}

export interface ContestMatchupState {
    contest: any;
}

export interface ContestMatchupPageInterface {
    readonly isFetching: boolean;
    readonly isInitialized: boolean;
    readonly err?: Error;
    readonly title: string;
    readonly description: string;
}

export interface StateInterface {
    contestMatchupPage: ContestMatchupPageInterface;
}
