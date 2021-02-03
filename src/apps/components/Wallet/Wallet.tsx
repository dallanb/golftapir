import React from 'react';
import { useSelector } from 'react-redux';
import { WalletProps } from './types';
import SiderLayoutHeader from '@layouts/SiderLayout/SiderLayoutHeader';
import HeaderTitle from './HeaderTitle';
import HeaderExtra from './HeaderExtra';
import { selectMeIsInitialized } from '@selectors/BaseSelector';
import './Wallet.less';

const Wallet: React.FunctionComponent<WalletProps> = () => {
    const isInitialized = useSelector(selectMeIsInitialized);
    return (
        <SiderLayoutHeader
            title={<HeaderTitle />}
            extra={<HeaderExtra />}
            className="wallet-sider-layout-header"
            showSpinner={!isInitialized}
        />
    );
};

export default Wallet;
