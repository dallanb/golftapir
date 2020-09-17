import { RouteComponentProps } from 'react-router-dom';
import { AuthInterface } from '@reducers/AuthReducer';

export interface RegisterProps extends RouteComponentProps<any> {
    isLoggedIn: boolean;
    register: (email: string, username: string, password: string) => any;
    setMessageModal: (isOpen: boolean, data: any) => any;
}

export interface StateProps {
    auth: AuthInterface;
}
