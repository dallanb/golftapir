export interface LoginProps {
    login: (email: string, password: string) => any;
    setMessageModal: (isOpen: boolean, data: any) => any;
}
