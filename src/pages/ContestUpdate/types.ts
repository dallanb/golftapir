import { RouteComponentProps } from 'react-router';

export interface ContestUpdateProps extends RouteComponentProps<any> {
    isInitialized: boolean;
    isSubmitted: boolean;
    uuid: string;
    title: string;
    description: string;
    contest: any;
    history: any;
    init: (contest: any) => void;
    terminate: () => void;
}

export interface ContestUpdateState {
    contest: any;
}

export interface StateProps {
    contestUpdatePage: ContestUpdatePageInterface;
}

export interface ContestUpdatePageInterface {
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
