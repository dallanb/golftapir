export interface RegisterFormProps {
    register: (
        email: string,
        username: string,
        password: string,
        display_name: string,
        country: string
    ) => any;
    initialValues: any;
}
