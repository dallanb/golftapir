import { ContestsContainerInterface } from '../reducer';
import { ContestInterface } from '@reducers/ContestReducer';

export interface ContestsListProps {
    data: any;
    metadata: any;
    isFetching: boolean;
    fetchContests: (options: any) => any;
}

export interface StateInterface {
    contestsPage: {
        ui: ContestsContainerInterface;
        data: { contest: ContestInterface };
    };
}
