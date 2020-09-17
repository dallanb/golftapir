import { RouteComponentProps } from 'react-router-dom';
import { AuthInterface } from '@reducers/AuthReducer';

export interface LoginProps extends RouteComponentProps<any> {
    isLoggedIn: boolean;
    login: (email: string, password: string) => any;
    setMessageModal: (isOpen: boolean, data: any) => any;
}

export interface StateProps {
    auth: AuthInterface;
}
