import { RouteComponentProps } from 'react-router-dom';
export interface WagersProps extends RouteComponentProps<any> {
    title: string;
    description: string;
    init: () => void;
    terminate: () => void;
    isInitialized: boolean;
    history: any;
}

export interface StateInterface {
    wagersPage: WagersPageInterface;
}

export interface WagersPageInterface {
    readonly isFetching: boolean;
    readonly isInitialized: boolean;
    readonly err?: Error;
    readonly title: string;
    readonly description: string;
    readonly wagersList: {
        data: any;
        metadata: any;
        isFetching: boolean;
        append: boolean;
    };
}
