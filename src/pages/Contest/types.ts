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
    readonly isInitialized: boolean;
    readonly isRefreshing: boolean;
    readonly err?: Error;
    readonly subscribed: boolean;
    readonly contest: any;
    readonly participant: any;
    readonly membersHash: any;
    readonly rankingLookup: any;
    readonly payout: {
        isFetching: boolean;
        data: any;
        err?: Error;
    };
}
