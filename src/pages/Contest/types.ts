import { RouteComponentProps } from 'react-router-dom';

export interface ContestProps extends RouteComponentProps {
    init: (uuid: string) => void;
    terminate: () => void;
    readyContest: (uuid: string) => void;
    activateContest: (uuid: string) => void;
    subscribe: (uuid: string) => void;
    unsubscribe: (uuid: string) => void;
    title: string;
    description: string;
    isInitialized: boolean;
    subscribed: boolean;
    contest: any;
}

export interface ContestState {
    uuid: string;
    name: string;
}

export interface ContestPageInterface {
    readonly isFetching: boolean;
    readonly isInitialized: boolean;
    readonly err?: Error;
    readonly title: string;
    readonly description: string;
    readonly subscribed: boolean;
    readonly contestWagers: any[];
    readonly contest: any;
    readonly score: any;
    readonly accountsHash: any;
}

export interface StateInterface {
    contestPage: ContestPageInterface;
}
