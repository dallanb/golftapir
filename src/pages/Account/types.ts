import { AccountContainerInterface } from '@reducers/ui/AccountContainerReducer';
import { AccountInterface } from '@reducers/data/AccountReducer';
import { AuthInterface } from '@reducers/data/AuthReducer';

export interface AccountProps {
    isSubmitting: boolean;
    isFetching: boolean;
    data: any;
    fetchMyAccount: () => void;
}

export interface StateInterface {
    accountPage: {
        ui: AccountContainerInterface;
        data: { account: AccountInterface; auth: AuthInterface };
    };
}
