import React, { ReactText } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { CompetitorsListProps } from './types';
import { List } from '@components';
import CompetitorsPageContentCompetitorsActions from '../actions';
import {
    selectListData,
    selectListIsFetching,
    selectListMetadata,
} from '../selector';
import CompetitorsListTile from './CompetitorsListTile';
import './CompetitorsList.scss';
import {} from '@pages/Contests/ContestsContent/Contests/selector';
import { getRefHeight } from '@utils';

const CompetitorsList: React.FunctionComponent<CompetitorsListProps> = ({
    containerRef,
}) => {
    const history = useHistory();

    const data = useSelector(selectListData);
    const metadata = useSelector(selectListMetadata);
    const isFetching = useSelector(selectListIsFetching);
    const tableDimensions = {
        size: 150,
        width: '100%',
        height: getRefHeight(containerRef, 200) - 32,
    };

    const dispatch = useDispatch();
    const loadMore = (start: number, stop: number) => {
        dispatch(
            CompetitorsPageContentCompetitorsActions.fetchData(
                {
                    page: Math.floor(stop / 10) + 1,
                    per_page: 10,
                },
                true
            )
        );
    };

    const hasNextPage = () => {
        return (
            metadata && metadata.page * metadata.per_page < metadata.total_count
        );
    };

    return (
        <List
            {...tableDimensions}
            items={data}
            hasNextPage={hasNextPage()}
            loadNextPage={loadMore}
            isNextPageLoading={isFetching}
            minimumBatchSize={10}
            rowRenderer={(props) => CompetitorsListTile({ props, history })}
        />
    );
};

export default CompetitorsList;
