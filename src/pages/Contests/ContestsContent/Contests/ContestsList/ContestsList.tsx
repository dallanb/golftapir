import React, { ReactText } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { get as _get } from 'lodash';
import { ContestsListProps } from './types';
import { List } from '@components';
import ContestsPageContentContestsActions from '../actions';
import {
    selectListData,
    selectListMetadata,
    selectListIsFetching,
} from '../selector';
import ContestsListTile from './ContestsListTile';
import './ContestsList.scss';
import { getRefHeight } from '@utils';

const ContestsList: React.FunctionComponent<ContestsListProps> = ({
    containerRef,
}) => {
    const history = useHistory();
    const data = useSelector(selectListData);
    const metadata = useSelector(selectListMetadata);
    const isFetching = useSelector(selectListIsFetching);

    const dispatch = useDispatch();
    const loadMore = (start: number, stop: number) => {
        dispatch(
            ContestsPageContentContestsActions.fetchData(
                {
                    page: Math.floor(stop / 10) + 1,
                    per_page: 10,
                },
                true
            )
        );
    };

    const hasNextPage =
        metadata && metadata.page * metadata.per_page < metadata.total_count;

    const loadTableDimensions = (): {
        size: number;
        height: ReactText;
        width: ReactText;
    } => {
        // move this info to schema.tsx
        const size = 150;
        const width = '100%';
        const height = getRefHeight(containerRef, 200) - 32; // subtract the padding

        return { size, width, height };
    };
    return (
        <List
            {...loadTableDimensions()}
            items={data}
            hasNextPage={hasNextPage}
            loadNextPage={loadMore}
            isNextPageLoading={isFetching}
            minimumBatchSize={10}
            rowRenderer={(props) => ContestsListTile({ props, history })}
        />
    );
};

export default ContestsList;
