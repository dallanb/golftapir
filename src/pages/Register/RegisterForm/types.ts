export interface RegisterFormProps {
    register: (email: string, username: string, password: string) => any;
    initialValues: any;
}
