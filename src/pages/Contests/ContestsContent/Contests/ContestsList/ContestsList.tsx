import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { ContestsListProps } from './types';
import { FixedSizeList, ContestTile } from '@components';
import ContestsPageContentContestsActions from '../actions';
import { getRefHeight } from '@utils';
import './ContestsList.less';
import CONSTANTS from '@locale/en-CA';
import { selectMyUUID } from '@selectors/BaseSelector';

const ContestsList: React.FunctionComponent<ContestsListProps> = ({
    containerRef,
    data,
    metadata,
    options,
    isFetching,
}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();
    const member = useSelector(selectMyUUID);

    const tableDimensions = {
        size: 100,
        width: '100%',
        height: getRefHeight(containerRef, 200),
    };

    const loadMore = (start: number, stop: number) => {
        dispatch(
            ContestsPageContentContestsActions.fetchData(
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
            rowRenderer={(props) =>
                ContestTile({ props, history, params, data: { member } })
            }
            emptyDescription={CONSTANTS.PAGES.CONTESTS.LIST.EMPTY}
        />
    );
};

export default ContestsList;
