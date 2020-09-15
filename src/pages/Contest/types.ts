import { RouteComponentProps } from 'react-router-dom';
import { ContestInterface } from '@reducers/ContestReducer';
import { ContestContainerInterface } from './reducer';

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
