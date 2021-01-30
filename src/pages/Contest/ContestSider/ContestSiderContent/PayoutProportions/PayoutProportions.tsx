import React from 'react';
import { PayoutProportionsProps } from './types';
import PayoutProportionsList from './PayoutProportionsList';
import './PayoutProportions.less';

const PayoutProportions: React.FunctionComponent<PayoutProportionsProps> = () => {
    return <PayoutProportionsList />;
};

export default PayoutProportions;
