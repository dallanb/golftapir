import { RouteComponentProps } from 'react-router-dom';

export interface ContestProps extends RouteComponentProps {
    init: (uuid: string) => void;
    terminate: () => void;
    title: string;
    description: string;
    isInitialized: boolean;
    status: string;
}

export interface ContestPageInterface {
    readonly isFetching: boolean;
    readonly isInitialized: boolean;
    readonly err?: Error;
    readonly title: string;
    readonly description: string;
    readonly status: string;
    readonly contestParticipants: any[];
    readonly contestWagers: any[];
}

export interface StateInterface {
    contestPage: ContestPageInterface;
}
