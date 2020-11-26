import { RouteComponentProps } from 'react-router-dom';

export interface ContestProps extends RouteComponentProps {
    init: (uuid: string) => void;
    terminate: () => void;
    readyContest: (uuid: string) => void;
    activateContest: (uuid: string) => void;
    subscribe: (uuid: string) => void;
    unsubscribe: (uuid: string) => void;
    isInitialized: boolean;
    subscribed: boolean;
    contest: any;
}

export interface ContestPageInterface {
    readonly isFetching: boolean;
    readonly isInitialized: boolean;
    readonly err?: Error;
    readonly subscribed: boolean;
    readonly contest: any;
    readonly accountsHash: any;
}
