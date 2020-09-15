import { ContestsContainerInterface } from './reducer';
import { ContestInterface } from '@reducers/ContestReducer';

export interface ContestsProps {
    data: any;
    isFetching: boolean;
    isSubmitting: boolean;
    fetchContests: (options: { page: number; per_page: number }) => any;
}

export interface StateInterface {
    contestsPage: {
        ui: ContestsContainerInterface;
        data: { contest: ContestInterface };
    };
}
