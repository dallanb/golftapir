import { AuthInterface } from '@reducers/AuthReducer';
import { RouteComponentProps } from 'react-router-dom';

export interface LogoutProps {}

export interface LogoutPageInterface {
    readonly isFetching: boolean;
    readonly isInitialized: boolean;
    readonly err?: Error;
    readonly title: string;
    readonly description: string;
}

export interface StateProps {
    logoutPage: LogoutPageInterface;
    auth: AuthInterface;
}
