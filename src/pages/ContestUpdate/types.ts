import { RouteComponentProps } from 'react-router';

export interface ContestUpdateProps {}

export interface ContestUpdatePageInterface {
    readonly isInitialized: boolean;
    readonly isSubmitted: boolean;
    readonly err?: Error;
    readonly uuid?: string;
    readonly contest: any;
}
