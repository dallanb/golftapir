import React from 'react';
import { ContestStartProps } from './types';
import './ContestBuyIn.less';
import { useSelector } from 'react-redux';
import { selectPayoutBuyIn } from '@pages/Contest/selector';

const ContestBuyIn: React.FunctionComponent<ContestStartProps> = () => {
    const buyIn = useSelector(selectPayoutBuyIn);
    return (
        <div className="contest-buy-in">
            <div className="contest-buy-in-label">Buy In</div>
            <div className="contest-buy-in-value">${buyIn}</div>
        </div>
    );
};

export default ContestBuyIn;
