import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'antd';
import { DollarTwoTone, PlusOutlined } from '@ant-design/icons';
import { WalletProps } from './types';
import ComponentContent from '@layouts/ComponentContent';
import {
    selectMeIsInitialized,
    selectMyWalletBalance,
} from '@selectors/BaseSelector';
import './Wallet.less';

const Wallet: React.FunctionComponent<WalletProps> = () => {
    const isInitialized = useSelector(selectMeIsInitialized);
    const balance = useSelector(selectMyWalletBalance);
    return (
        <ComponentContent
            className="wallet-component-content space"
            showSpinner={!isInitialized}
        >
            <div className="wallet-main">
                <div className="wallet-balance">
                    <div className="wallet-balance-label">Your Balance</div>
                    <div className="wallet-balance-amount">
                        <DollarTwoTone
                            twoToneColor={'orange'}
                            className="wallet-balance-amount-icon"
                        />
                        {balance}
                    </div>
                </div>
            </div>
            <div className="wallet-side">
                <div className="wallet-button">
                    <Button
                        onClick={() => null}
                        type="default"
                        shape="round"
                        icon={<PlusOutlined />}
                    >
                        Add
                    </Button>
                </div>
            </div>
        </ComponentContent>
    );
};

export default Wallet;
