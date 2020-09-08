import { ModalInterface } from './ModalReducer';
import { AccountInterface } from './AccountReducer';
import { AuthInterface } from './AuthReducer';

export interface ModalStateInterface {
    readonly modal: ModalInterface;
}

export interface AccountStateInterface {
    readonly account: AccountInterface;
}

export interface AuthStateInterface {
    readonly auth: AuthInterface;
}
