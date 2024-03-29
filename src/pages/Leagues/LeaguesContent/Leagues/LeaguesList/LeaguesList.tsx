import React, { ReactText } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { get as _get } from 'lodash';
import { LeaguesListProps } from './types';
import { FixedSizeList } from '@components';
import LeaguesPageContentLeaguesActions from '../actions';
import {
    selectListData,
    selectListMetadata,
    selectListIsFetching,
    selectListOptions,
} from '../selector';
import LeaguesListTile from './LeaguesListTile';
import './LeaguesList.less';
import { getRefHeight } from '@utils';

const LeaguesList: React.FunctionComponent<LeaguesListProps> = ({
    containerRef,
}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const data = useSelector(selectListData);
    const metadata = useSelector(selectListMetadata);
    const options = useSelector(selectListOptions);
    const isFetching = useSelector(selectListIsFetching);
    const tableDimensions = {
        size: 100,
        width: '100%',
        height: getRefHeight(containerRef, 200) - 32,
    };

    const loadMore = (start: number, stop: number) => {
        dispatch(
            LeaguesPageContentLeaguesActions.fetchData(
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
            rowRenderer={(props) => LeaguesListTile({ props, history })}
        />
    );
};

export default LeaguesList;
