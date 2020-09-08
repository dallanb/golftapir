import { ModalInterface } from './ModalReducer';
import { AccountInterface } from './AccountReducer';
import { AuthInterface } from './AuthReducer';
import { ContestInterface } from './ContestReducer';

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
