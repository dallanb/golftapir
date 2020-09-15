import { ContestsContainerInterface } from '@reducers/ui/ContestsContainerReducer';
import { ContestInterface } from '@reducers/data/ContestReducer';

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
