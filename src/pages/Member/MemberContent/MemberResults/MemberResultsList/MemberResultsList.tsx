import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { MemberResultsListProps } from './types';
import { ContestTile, FixedSizeList } from '@components';
import { getRefHeight } from '@utils';
import MemberPageContentMemberResultsActions from '../actions';
import './MemberResultsList.less';
import { get as _get } from 'lodash';

const MemberResultsList: React.FunctionComponent<MemberResultsListProps> = ({
    containerRef,
    containerDimensions,
    data,
    metadata,
    options,
    isFetching,
}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();

    const tableDimensions = {
        size: 100,
        width: '100%',
        height: _get(
            containerDimensions,
            ['height'],
            getRefHeight(containerRef, 200)
        ),
    };
    console.log(tableDimensions);

    const loadMore = (start: number, stop: number) => {
        dispatch(
            MemberPageContentMemberResultsActions.fetchData(
                {
                    ...options,
                    page: Math.floor(stop / 10) + 1,
                    per_page: 10,
                },
                true
            )
        );
    };

    const hasNextPage =
        metadata && metadata.page * metadata.per_page < metadata.total_count;

    return (
        <FixedSizeList
            {...tableDimensions}
            items={data}
            hasNextPage={hasNextPage}
            loadNextPage={loadMore}
            isNextPageLoading={isFetching}
            minimumBatchSize={10}
            rowRenderer={(props) => ContestTile({ props, history, params })}
            emptyDescription={'No Contests'}
        />
    );
};

export default MemberResultsList;
