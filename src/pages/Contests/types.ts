import { RouteComponentProps } from 'react-router-dom';
export interface ContestsProps extends RouteComponentProps<any> {
    title: string;
    description: string;
    init: () => void;
    terminate: () => void;
    isInitialized: boolean;
    history: any;
}

export interface StateInterface {
    contestsPage: ContestsPageInterface;
}

export interface ContestsPageInterface {
    readonly isInitialized: boolean;
    readonly err?: Error;
}
