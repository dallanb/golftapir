import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get as _get } from 'lodash';
import { ContentLayout } from '@layouts';
import { AccountProps } from './types';
import AccountPageActions from './actions';
import AccountHeader from './AccountHeader';
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
        <ContentLayout
            // header={<AccountHeader />}
            content={<AccountContent />}
            sider={<AccountSider />}
            // showSpinner={!isInitialized}
            className="account-view"
        />
    );
};

export default Account;
