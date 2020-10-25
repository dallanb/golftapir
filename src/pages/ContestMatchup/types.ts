import { RouteComponentProps } from 'react-router';

export interface ContestMatchupProps extends RouteComponentProps {
    init: (contest: any) => void;
    terminate: () => void;
    title: string;
    description: string;
    sheet: any[];
    participants: any[];
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
    readonly score: any;
    readonly participants: any;
}

export interface StateInterface {
    contestMatchupPage: ContestMatchupPageInterface;
}
