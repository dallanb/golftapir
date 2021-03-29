import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { set as _set } from 'lodash';
import { PayoutProportionsProps } from './types';
import PayoutProportionsList from './PayoutProportionsList';
import PayoutProportionsExtra from './PayoutProportionsExtra';
import { SiderComponentContent } from '@layouts/ComponentContent';
import { formatPayoutProportions } from './utils';
import {
    selectPayoutData,
    selectPayoutIsFetching,
} from '@pages/Contest/selector';
import './PayoutProportions.less';
import CONSTANTS from '@locale/en-CA';

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
        <SiderComponentContent
            componentRef={ref}
            title={CONSTANTS.PAGES.CONTEST.PAYOUT}
            extra={<PayoutProportionsExtra />}
            showSpinner={isFetching}
            bodyStyle={dimensions}
            className="payout-proportions-component-content"
        >
            <PayoutProportionsList
                containerRef={ref}
                containerDimensions={dimensions}
                data={data}
            />
        </SiderComponentContent>
    );
};

export default PayoutProportions;
