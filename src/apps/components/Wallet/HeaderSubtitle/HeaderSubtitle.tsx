import React from 'react';
import { useSelector } from 'react-redux';
import { DollarTwoTone } from '@ant-design/icons';
import { selectMyWalletBalance } from '@selectors/BaseSelector';
import { HeaderSubtitleProps } from './types';
import './HeaderSubtitle.less';

const HeaderSubtitle: React.FunctionComponent<HeaderSubtitleProps> = () => {
    const balance = useSelector(selectMyWalletBalance);
    return (
        <div className="header-subtitle">
            <div className="header-subtitle-balance">
                <DollarTwoTone
                    twoToneColor={'orange'}
                    className="header-subtitle-balance-icon"
                />
                {balance}
            </div>
        </div>
    );
};

export default HeaderSubtitle;
