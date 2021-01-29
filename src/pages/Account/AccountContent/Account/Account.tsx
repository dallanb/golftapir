import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AccountForm from './AccountForm';
import { AccountProps } from './types';
import AccountPageContentAccountActions from './actions';
import { selectData } from './selector';
import ComponentContent from '@layouts/ComponentContent';
import './Account.less';

const Account: React.FunctionComponent<AccountProps> = ({}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(AccountPageContentAccountActions.init());
        return () => {
            dispatch(AccountPageContentAccountActions.terminate());
        };
    }, []);

    const { isInitialized } = useSelector(selectData);

    return (
        <ComponentContent
            showSpinner={!isInitialized}
            className="account"
            title={'Account Settings'}
        >
            <AccountForm />
        </ComponentContent>
    );
};

export default Account;
