import React from 'react';
import { useSelector } from 'react-redux';
import { get as _get } from 'lodash';
import { Empty } from 'antd';
import { EmptyList, FixedSizeList } from '@components';
import { PayoutProportionsListProps } from './types';
import PayoutProportionsListTile from './PayoutProportionsListTile';
import { selectContestStatus } from '@pages/Contest/selector';
import './PayoutProportionsList.less';
import { getRefHeight } from '@utils';

const PayoutProportionsList: React.FunctionComponent<PayoutProportionsListProps> = ({
    containerRef,
    containerDimensions,
    data,
}) => {
    const status = useSelector(selectContestStatus);

    const tableDimensions = {
        size: 50,
        width: '100%',
        height: _get(
            containerDimensions,
            ['height'],
            getRefHeight(containerRef, 200)
        ),
    };

    const loadMore = (start: number, stop: number) => null;

    return (
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
            empty={
                <EmptyList
                    description={'No wagers'}
                    image={Empty.PRESENTED_IMAGE_SIMPLE}
                />
            }
        />
    );
};

export default PayoutProportionsList;
