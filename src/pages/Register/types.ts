import { RouteComponentProps } from 'react-router-dom';

export interface RegisterProps extends RouteComponentProps<any> {
    isLoggedIn: boolean;
    register: (email: string, username: string, password: string) => any;
    setMessageModal: (isOpen: boolean, data: any) => any;
}
