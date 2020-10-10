import { RouteComponentProps } from 'react-router-dom';
import { MemberAppInterface } from '@apps/MemberApp/reducer';

export interface ContestProps extends RouteComponentProps {
    init: (uuid: string) => void;
    terminate: () => void;
    onActivate: (uuid: string, data: { status: string }) => void;
    title: string;
    description: string;
    isInitialized: boolean;
    status: string;
    contestParticipants: any[];
    isOwner: boolean;
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
    readonly owner_uuid: string;
    readonly contestParticipants: any[];
    readonly contestWagers: any[];
}

export interface StateInterface {
    contestPage: ContestPageInterface;
    base: MemberAppInterface;
}
