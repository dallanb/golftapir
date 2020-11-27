import { RouteComponentProps } from 'react-router';

export interface CompetitorProps extends RouteComponentProps {
    init: (uuid: string) => void;
    terminate: () => void;
    isInitialized: boolean;
}

export interface CompetitorPageInterface {
    readonly isInitialized: boolean;
    readonly err?: Error;
    readonly account: any;
}
