import { ContestsPageInterface } from '../reducer';
import { ContestInterface } from '@reducers/ContestReducer';
import { RouteComponentProps } from 'react-router-dom';

export interface ContestsListProps {
    data: any;
    metadata: any;
    isFetching: boolean;
    fetchContests: (options: any) => any;
    history: any;
}

export interface StateInterface {
    contestsPage: {
        ui: ContestsPageInterface;
        data: { contest: ContestInterface };
    };
}
