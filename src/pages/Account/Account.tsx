import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppLayoutContent } from '@layouts/AppLayout';
import { AccountProps } from './types';
import AccountPageActions from './actions';
import AccountContent from './AccountContent';
import AccountSider from './AccountSider';
import { selectData } from './selector';
import './Account.less';

const Account: React.FunctionComponent<AccountProps> = () => {
    const dispatch = useDispatch();

    const { isInitialized } = useSelector(selectData);

    useEffect(() => {
        dispatch(AccountPageActions.init());
        return () => {
            dispatch(AccountPageActions.terminate());
        };
    }, []);

    return (
        <AppLayoutContent
            content={<AccountContent />}
            sider={<AccountSider />}
            className="account-view"
        />
    );
};

export default Account;
