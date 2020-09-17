import { RouteComponentProps } from 'react-router-dom';

export interface ContestProps extends RouteComponentProps {
    init: (uuid: string) => void;
    terminate: () => void;
    title: string;
    description: string;
    isInitialized: boolean;
}

export interface ContestPageInterface {
    readonly isFetching: boolean;
    readonly isInitialized: boolean;
    readonly err?: Error;
    readonly title: string;
    readonly description: string;
    readonly contestParticipants: any[];
}

export interface StateInterface {
    contestPage: ContestPageInterface;
}
