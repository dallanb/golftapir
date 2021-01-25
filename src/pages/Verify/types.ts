import { RouteComponentProps } from 'react-router-dom';
import { AuthInterface } from '@reducers/AuthReducer';

export interface VerifyProps extends RouteComponentProps<any> {
    isVerified: boolean;
    init: () => void;
}

export interface VerifyPageInterface {
    readonly isFetching: boolean;
    readonly isInitialized: boolean;
    readonly err?: Error;
    readonly title: string;
    readonly description: string;
}

export interface StateProps {
    auth: AuthInterface;
    verifyPage: VerifyPageInterface;
}
