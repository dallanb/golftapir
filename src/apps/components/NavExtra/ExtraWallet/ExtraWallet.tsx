import React from 'react';
import { useSelector } from 'react-redux';
import { takeRight as _takeRight } from 'lodash';
import { DollarTwoTone } from '@ant-design/icons/lib';
import { selectMyWalletBalance } from '@selectors/BaseSelector';
import { ExtraWalletProps } from './types';
import routes from '@constants/routes';
import './ExtraWallet.less';

const ExtraWallet: React.FunctionComponent<ExtraWalletProps> = ({}) => {
    const isWalletCreatePage =
        _takeRight(location.pathname.split('/'), 2).join('') ==
        _takeRight(routes.ROUTES.COURSES_CREATE.ROUTE.split('/'), 2).join('');
    const balance = useSelector(selectMyWalletBalance);

    return (
        <div className="nav-extra-wallet">
            <div className="nav-extra-wallet-balance">
                <div className="nav-extra-wallet-balance-label">
                    Your Balance
                </div>
                <div className="nav-extra-wallet-balance-amount">
                    <DollarTwoTone
                        twoToneColor={'orange'}
                        className="nav-extra-wallet-balance-amount-icon"
                    />
                    {balance}
                </div>
            </div>
        </div>
    );
};

export default ExtraWallet;
