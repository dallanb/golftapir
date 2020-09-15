import { ContestsPageInterface } from '../reducer';
import { ContestInterface } from '@reducers/ContestReducer';

export interface ContestsListProps {
    data: any;
    metadata: any;
    isFetching: boolean;
    fetchContests: (options: any) => any;
}

export interface StateInterface {
    contestsPage: {
        ui: ContestsPageInterface;
        data: { contest: ContestInterface };
    };
}
