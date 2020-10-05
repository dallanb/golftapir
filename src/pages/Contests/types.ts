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
    readonly isFetching: boolean;
    readonly isInitialized: boolean;
    readonly err?: Error;
    readonly title: string;
    readonly description: string;
    readonly contestsList: {
        data: any;
        metadata: any;
        isFetching: boolean;
        append: boolean;
    };
}
