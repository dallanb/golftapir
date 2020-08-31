export interface RegisterProps {
    register: (email: string, username: string, password: string) => any;
    setMessageModal: (isOpen: boolean, data: any) => any;
}
