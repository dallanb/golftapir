import { ContestsPageInterface } from './reducer';
import { ContestInterface } from '@reducers/ContestReducer';
import { RouteComponentProps } from 'react-router-dom';
export interface ContestsProps extends RouteComponentProps<any> {
    data: any;
    isFetching: boolean;
    isSubmitting: boolean;
    fetchContests: (options: { page: number; per_page: number }) => any;
    history: any;
}

export interface StateInterface {
    contestsPage: {
        ui: ContestsPageInterface;
        data: { contest: ContestInterface };
    };
}
