import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AccountForm from './AccountForm';
import { AccountProps } from './types';
import AccountPageContentAccountActions from './actions';
import ComponentContent from '@layouts/ComponentContent';
import { OverlaySpin } from '@components';
import { selectIsInitialized as selectIsDataInitialized } from '@pages/Account/selector';
import { selectIsInitialized, selectIsSubmitting } from './selector';
import './Account.less';
import CONSTANTS from '@locale/en-CA';

const Account: React.FunctionComponent<AccountProps> = ({}) => {
    const dispatch = useDispatch();
    const isDataInitialized = useSelector(selectIsDataInitialized);
    const isInitialized = useSelector(selectIsInitialized);
    const isSubmitting = useSelector(selectIsSubmitting);
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
            bodyClassName="account-content"
            title={CONSTANTS.PAGES.ACCOUNT.FORM.TITLE}
        >
            <AccountForm />
            <OverlaySpin visible={isSubmitting} />
        </ComponentContent>
    );
};

export default Account;
