import { RouteComponentProps } from 'react-router-dom';
import { AuthInterface } from '@reducers/AuthReducer';

export interface RegisterProps extends RouteComponentProps<any> {
    isLoggedIn: boolean;
    init: () => void;
}

export interface RegisterPageInterface {
    readonly isFetching: boolean;
    readonly isInitialized: boolean;
    readonly err?: Error;
    readonly title: string;
    readonly description: string;
    readonly formInitialValues: any;
}

export interface StateProps {
    auth: AuthInterface;
    registerPage: RegisterPageInterface;
}
