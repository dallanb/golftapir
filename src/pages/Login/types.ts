import { RouteComponentProps } from 'react-router-dom';
import { AuthInterface } from '@reducers/AuthReducer';

export interface LoginProps extends RouteComponentProps<any> {
    isLoggedIn: boolean;
    init: () => void;
}

export interface LoginPageInterface {
    readonly isFetching: boolean;
    readonly isInitialized: boolean;
    readonly err?: Error;
    readonly title: string;
    readonly description: string;
    readonly formInitialValues: any;
}

export interface StateProps {
    auth: AuthInterface;
    loginPage: LoginPageInterface;
}
