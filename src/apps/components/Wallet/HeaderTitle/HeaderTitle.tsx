import React from 'react';
import { useSelector } from 'react-redux';
import { selectMyWalletBalance } from '@selectors/BaseSelector';
import { HeaderTitleProps } from './types';
import './HeaderTitle.less';
import { DollarTwoTone } from '@ant-design/icons';

const HeaderTitle: React.FunctionComponent<HeaderTitleProps> = () => {
    const balance = useSelector(selectMyWalletBalance);
    return (
        <div className="header-title">
            <div className="header-title-label">Your Balance</div>
            <div className="header-title-balance">
                <DollarTwoTone
                    twoToneColor={'orange'}
                    className="header-title-balance-icon"
                />
                {balance}
            </div>
        </div>
    );
};

export default HeaderTitle;
