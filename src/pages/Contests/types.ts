export interface ContestsProps {
    data: any;
    isFetching: boolean;
    isSubmitting: boolean;
    fetchContests: (options: { page: number; per_page: number }) => any;
}
