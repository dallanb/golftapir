import React from 'react';
import { WalletProps } from './types';
import SiderLayoutHeader from '@layouts/SiderLayout/SiderLayoutHeader';
import HeaderTitle from './HeaderTitle';
import HeaderExtra from './HeaderExtra';
import './Wallet.less';

const Wallet: React.FunctionComponent<WalletProps> = () => {
    return (
        <SiderLayoutHeader
            title={<HeaderTitle />}
            extra={<HeaderExtra />}
            className="wallet-sider-layout-header"
        />
    );
};

export default Wallet;
