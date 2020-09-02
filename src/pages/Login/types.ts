import { RouteComponentProps } from 'react-router-dom';

export interface LoginProps extends RouteComponentProps<any> {
    isLoggedIn: boolean;
    login: (email: string, password: string) => any;
    setMessageModal: (isOpen: boolean, data: any) => any;
}
