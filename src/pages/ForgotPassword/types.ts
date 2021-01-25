import { RouteComponentProps } from 'react-router-dom';
import { AuthInterface } from '@reducers/AuthReducer';

export interface ForgotPasswordProps extends RouteComponentProps<any> {
    init: () => void;
}

export interface ForgotPasswordPageInterface {
    readonly isInitialized: boolean;
    readonly isSubmitting: boolean;
    readonly isSubmitted: boolean;
    readonly err?: Error;
    readonly title: string;
    readonly description: string;
    readonly formInitialValues: any;
}

export interface StateProps {
    auth: AuthInterface;
    forgotPasswordPage: ForgotPasswordPageInterface;
}
