import { AccountPageInterface } from './reducer';
import { AccountInterface } from '@reducers/AccountReducer';
import { AuthInterface } from '@reducers/AuthReducer';

export interface AccountProps {
    isSubmitting: boolean;
    isFetching: boolean;
    data: any;
    fetchMyAccount: () => void;
}

export interface StateInterface {
    accountPage: {
        ui: AccountPageInterface;
        data: { account: AccountInterface; auth: AuthInterface };
    };
}
