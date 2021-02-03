import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AccountForm from './AccountForm';
import { AccountProps } from './types';
import AccountPageContentAccountActions from './actions';
import ComponentContent from '@layouts/ComponentContent';
import { selectIsInitialized as selectIsDataInitialized } from '@pages/Account/selector';
import { selectIsInitialized } from './selector';
import './Account.less';

const Account: React.FunctionComponent<AccountProps> = ({}) => {
    const dispatch = useDispatch();
    const isDataInitialized = useSelector(selectIsDataInitialized);
    const isInitialized = useSelector(selectIsInitialized);
    const [isDataInitializing, setDataIsInitializing] = useState(true);

    useEffect(() => {
        dispatch(AccountPageContentAccountActions.init());
        return () => {
            dispatch(AccountPageContentAccountActions.terminate());
        };
    }, []);

    useEffect(() => {
        if (isDataInitialized && isDataInitializing) {
            dispatch(AccountPageContentAccountActions.init());
            setDataIsInitializing(false);
        }
    }, [isDataInitialized]);

    return (
        <ComponentContent
            showSpinner={!isInitialized || !isDataInitialized}
            className="account"
            title={'Account Settings'}
        >
            <AccountForm />
        </ComponentContent>
    );
};

export default Account;
