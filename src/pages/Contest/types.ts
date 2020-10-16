import { RouteComponentProps } from 'react-router-dom';

export interface ContestProps extends RouteComponentProps {
    init: (uuid: string) => void;
    terminate: () => void;
    onActivate: (uuid: string, data: { status: string }) => void;
    subscribe: (uuid: string) => void;
    unsubscribe: (uuid: string) => void;
    title: string;
    description: string;
    isInitialized: boolean;
    subscribed: boolean;
}

export interface ContestState {
    uuid: string;
}

export interface ContestPageInterface {
    readonly isFetching: boolean;
    readonly isInitialized: boolean;
    readonly err?: Error;
    readonly title: string;
    readonly description: string;
    readonly status: string;
    readonly subscribed: boolean;
    readonly owner_uuid: string;
    readonly contestParticipants: any[];
    readonly contestWagers: any[];
    readonly contest: any;
}

export interface StateInterface {
    contestPage: ContestPageInterface;
}
