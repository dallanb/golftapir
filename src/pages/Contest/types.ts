import { RouteComponentProps } from 'react-router-dom';
import { ContestInterface } from '@reducers/data/ContestReducer';
import { ContestContainerInterface } from '@reducers/ui/ContestContainerReducer';

export interface ContestProps extends RouteComponentProps {
    fetchContestParticipants: (uuid: string) => void;
    data: any;
    isFetching: boolean;
}

export interface StateInterface {
    contestPage: {
        ui: ContestContainerInterface;
        data: { contest: ContestInterface };
    };
}
