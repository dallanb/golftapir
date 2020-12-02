import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        fetchAccount: ['uuid', 'options'],
        fetchAccountSuccess: ['data'],
        fetchAccountFailure: ['err'],
        fetchAccountMembership: ['uuid', 'options'],
        fetchAccountMembershipSuccess: ['data'],
        fetchAccountMembershipFailure: ['err'],
        fetchAccounts: ['options'],
        fetchAccountsSuccess: ['data'],
        fetchAccountsFailure: ['err'],
        updateAccount: ['uuid', 'values'],
        updateAccountSuccess: ['data'],
        updateAccountFailure: ['err'],
        assignAvatar: ['uuid', 'avatar'],
        assignAvatarSuccess: ['data'],
        assignAvatarFailure: ['err'],
        searchAccounts: ['key'],
        searchAccountsSuccess: ['data'],
        searchAccountsFailure: ['err'],
        bulkFetchAccounts: ['within', 'options'],
        bulkFetchAccountsSuccess: ['data'],
        bulkFetchAccountsFailure: ['err'],
    },
    {
        prefix: 'ACCOUNT_',
    }
);
export const AccountTypes = Types;
export default Creators;
