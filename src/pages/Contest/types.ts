import { RouteComponentProps } from 'react-router-dom';
import { ContestInterface } from '@reducers/ContestReducer';
import { ContestPageInterface } from './reducer';

export interface ContestProps extends RouteComponentProps {
    init: (uuid: string) => void;
    data: any;
    isFetching: boolean;
}

export interface StateInterface {
    contestPage: {
        ui: ContestPageInterface;
        data: { contest: ContestInterface };
    };
}
