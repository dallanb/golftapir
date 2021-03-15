import React from 'react';
import { DollarTwoTone } from '@ant-design/icons';
import CONSTANTS from '@locale/en-CA';

const WalletModalBody = () => (
    <div className="wallet-balance-amount">
        {CONSTANTS.COMPONENTS.WALLET.ADD_MODAL.DESCRIPTION}
        <DollarTwoTone
            twoToneColor={'orange'}
            className="wallet-balance-amount-icon"
        />{' '}
        <b>100</b>
    </div>
);

export default WalletModalBody;
