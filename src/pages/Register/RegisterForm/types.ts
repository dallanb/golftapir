export interface RegisterFormProps {
    register: (
        email: string,
        username: string,
        password: string,
        first_name: string,
        last_name: string
    ) => any;
    initialValues: any;
}
