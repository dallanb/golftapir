import { RouteComponentProps } from 'react-router-dom';
import { ContestInterface } from '@reducers/ContestReducer';
import { ContestPageInterface } from './reducer';
import { AccountInterface } from '@reducers/AccountReducer';

export interface ContestProps extends RouteComponentProps {
    init: (uuid: string) => void;
    data: any;
    isInitialized: boolean;
}

export interface StateInterface {
    contestPage: {
        ui: ContestPageInterface;
        data: { contest: ContestInterface; account: AccountInterface };
    };
}
