import { RouteComponentProps } from 'react-router';

export interface ContestsCreateProps extends RouteComponentProps<any> {
    isInitialized: boolean;
    isSubmitted: boolean;
    uuid?: string;
    title: string;
    description: string;
    history: any;
    init: () => void;
    terminate: () => void;
}

export interface StateProps {
    contestsCreatePage: ContestsCreatePageInterface;
}

export interface ContestsCreatePageInterface {
    readonly isFetching: boolean;
    readonly isInitialized: boolean;
    readonly isSubmitted: boolean;
    readonly err?: Error;
    readonly title: string;
    readonly description: string;
    readonly createFormInitialValues: any;
    readonly createFormSearchParticipants: any[];
    readonly uuid?: string;
}
