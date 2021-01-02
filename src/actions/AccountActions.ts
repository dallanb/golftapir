import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        fetchAccount: ['uuid', 'options'],
        fetchAccountSuccess: ['data'],
        fetchAccountFailure: ['err'],
        fetchMyAccount: ['options'],
        fetchMyAccountSuccess: ['data'],
        fetchMyAccountFailure: ['err'],
        fetchAccountMembership: ['uuid', 'options'],
        fetchAccountMembershipSuccess: ['data'],
        fetchAccountMembershipFailure: ['err'],
        fetchAccounts: ['options'],
        fetchAccountsSuccess: ['data'],
        fetchAccountsFailure: ['err'],
        updateAccount: ['uuid', 'values'],
        updateAccountSuccess: ['data'],
        updateAccountFailure: ['err'],
    },
    {
        prefix: 'ACCOUNT_',
    }
);
export const AccountTypes = Types;
export default Creators;
