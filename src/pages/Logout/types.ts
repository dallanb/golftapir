import { AuthInterface } from '@reducers/AuthReducer';
import { RouteComponentProps } from 'react-router-dom';

export interface LogoutProps extends RouteComponentProps {
    isInitialized: boolean;
    isLoggedIn: boolean;
    init: () => void;
    terminate: () => void;
    history: any;
}

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
