export interface AccountProps {
    isSubmitting: boolean;
    isFetching: boolean;
    data: any;
    fetchMyAccount: () => void;
}
