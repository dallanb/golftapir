import { call } from 'redux-saga/effects';
import { AccountService } from '@services';

function* bulkFetchAccounts(accounts: string[]) {
    const within = { key: 'membership_uuid', value: accounts };
    const options = { include: 'avatar' };
    const { accounts: bulkAccounts } = yield call(
        AccountService.bulkFetchAccounts,
        { within },
        options
    );

    return bulkAccounts;
}

export default bulkFetchAccounts;
