import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { MemberResultsListProps } from './types';
import { ContestTile, FixedSizeList } from '@components';
import { selectListData, selectListIsFetching } from '../selector';
import { getRefHeight } from '@utils';
import './MemberResultsList.less';

const MemberResultsList: React.FunctionComponent<MemberResultsListProps> = ({
    containerRef,
}) => {
    const history = useHistory();
    const params = useParams();
    const data = useSelector(selectListData);
    const isFetching = useSelector(selectListIsFetching);

    const tableDimensions = {
        size: 100,
        width: '100%',
        height: getRefHeight(containerRef, 200) - 80,
    };

    return (
        <FixedSizeList
            {...tableDimensions}
            items={data}
            hasNextPage={false}
            isNextPageLoading={isFetching}
            minimumBatchSize={10}
            rowRenderer={(props) => ContestTile({ props, history, params })}
        />
    );
};

export default MemberResultsList;
