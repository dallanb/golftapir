import React from 'react';
import { useSelector } from 'react-redux';
import { ContentLayoutContent } from '@layouts';
import Account from './Account';
import { AccountContentProps } from './types';
import { selectData } from '../selector';

const AccountContent: React.FunctionComponent<AccountContentProps> = ({}) => {
    const { isInitialized } = useSelector(selectData);
    return (
        <ContentLayoutContent
            showSpinner={!isInitialized}
        >
            <Account />
        </ContentLayoutContent>
    );
};

export default AccountContent;
