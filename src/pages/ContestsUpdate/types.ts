import { RouteComponentProps } from 'react-router';

export interface ContestsUpdateProps extends RouteComponentProps<any> {
    isInitialized: boolean;
    isSubmitted: boolean;
    uuid: string;
    title: string;
    description: string;
    contest: any;
    history: any;
    init: (uuid: string) => void;
    terminate: () => void;
}

export interface ContestUpdateState {
    uuid: string;
}

export interface StateProps {
    contestsUpdatePage: ContestsUpdatePageInterface;
}

export interface ContestsUpdatePageInterface {
    readonly isFetching: boolean;
    readonly isInitialized: boolean;
    readonly isSubmitted: boolean;
    readonly err?: Error;
    readonly title: string;
    readonly description: string;
    readonly updateFormInitialValues: any;
    readonly uuid?: string;
    readonly contest: any;
}
