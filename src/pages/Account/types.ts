import { AccountPageInterface } from './reducer';

export interface AccountProps {
    isInitialized: boolean;
    title: string;
    description: string;
    init: () => void;
    terminate: () => void;
}

export interface StateInterface {
    accountPage: AccountPageInterface;
}
