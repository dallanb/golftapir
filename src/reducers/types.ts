import { ModalInterface } from './ui/ModalReducer';
import { AccountInterface } from './data/AccountReducer';
import { AuthInterface } from './data/AuthReducer';
import { ContestInterface } from './data/ContestReducer';

export interface ModalStateInterface {
    readonly modal: ModalInterface;
}

export interface AccountStateInterface {
    readonly account: AccountInterface;
}

export interface AuthStateInterface {
    readonly auth: AuthInterface;
}
export interface ContestStateInterface {
    readonly contest: ContestInterface;
}
