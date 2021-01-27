import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { FixedSizeList } from '@components';
import { PayoutProportionsListProps } from './types';
import PayoutProportionsListTile from './PayoutProportionsListTile';
import {
    selectContestStatus,
    selectPayoutData,
    selectPayoutIsFetching,
} from '@pages/Contest/selector';
import { getRefHeight } from '@utils';
import { formatPayoutProportions } from '../utils';
import ComponentContent from '@layouts/ComponentContent';
import './PayoutProportionsList.less';

const PayoutProportionsList: React.FunctionComponent<PayoutProportionsListProps> = () => {
    const ref = useRef(null);
    const isFetching = useSelector(selectPayoutIsFetching);
    const payoutData = useSelector(selectPayoutData);
    const status = useSelector(selectContestStatus);
    const data = formatPayoutProportions(payoutData);
    const containerDimensions = {
        height: Math.min(200, data.length * 50 + 63),
    };
    const tableDimensions = {
        size: 50,
        width: '100%',
        height: Math.min(getRefHeight(ref, 200) - 63),
    };

    const loadMore = (start: number, stop: number) => null;

    return (
        <ComponentContent
            title={'Payout'}
            showSpinner={isFetching}
            style={containerDimensions}
            className="payout-proportions-component-content"
        >
            <FixedSizeList
                {...tableDimensions}
                hasNextPage={false}
                isNextPageLoading={false}
                items={data}
                loadNextPage={loadMore}
                minimumBatchSize={10}
                rowRenderer={(props) =>
                    PayoutProportionsListTile({ props, status })
                }
            />
        </ComponentContent>
    );
};

export default PayoutProportionsList;
