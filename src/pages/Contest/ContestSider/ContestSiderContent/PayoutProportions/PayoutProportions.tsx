import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { set as _set } from 'lodash';
import { PayoutProportionsProps } from './types';
import PayoutProportionsList from './PayoutProportionsList';
import ComponentContent from '@layouts/ComponentContent';
import { formatPayoutProportions } from './utils';
import {
    selectPayoutData,
    selectPayoutIsFetching,
} from '@pages/Contest/selector';
import './PayoutProportions.less';

const PayoutProportions: React.FunctionComponent<PayoutProportionsProps> = () => {
    const ref = useRef(null);
    const isFetching = useSelector(selectPayoutIsFetching);
    const payoutData = useSelector(selectPayoutData);
    const data = formatPayoutProportions(payoutData);

    const emptyHeight = 124;
    const dataHeight = Math.min(400, data.length * 50);
    const dimensions = {};
    if (!isFetching) {
        _set(dimensions, ['height'], dataHeight || emptyHeight);
    }

    return (
        <ComponentContent
            componentRef={ref}
            title={'Payout'}
            showSpinner={isFetching}
            // showSpinner={true}
            bodyStyle={dimensions}
            className="payout-proportions-component-content"
        >
            <PayoutProportionsList containerRef={ref} data={data} />
        </ComponentContent>
    );
};

export default PayoutProportions;
