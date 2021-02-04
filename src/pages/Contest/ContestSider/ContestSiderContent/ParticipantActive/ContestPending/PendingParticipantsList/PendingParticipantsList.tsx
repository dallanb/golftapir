import React from 'react';
import { useDispatch } from 'react-redux';
import { get as _get } from 'lodash';
import { FixedSizeList } from '@components';
import { PendingParticipantsListProps } from './types';
import PendingParticipantsListTile from './PendingParticipantsListTile';
import ContestPageSiderContentParticipantActiveContestPendingActions from '../actions';
import { getRefHeight } from '@utils';
import './PendingParticipantsList.less';

const PendingParticipantsList: React.FunctionComponent<PendingParticipantsListProps> = ({
    containerRef,
    containerDimensions,
    data,
    isFetching,
}) => {
    const dispatch = useDispatch();
    const tableDimensions = {
        size: 50,
        width: '100%',
        height: _get(
            containerDimensions,
            ['height'],
            getRefHeight(containerRef, 200)
        ),
    };

    const loadMore = (start: number, stop: number) => {
        dispatch(
            ContestPageSiderContentParticipantActiveContestPendingActions.fetchData(
                {
                    page: Math.floor(stop / 10) + 1,
                    per_page: 10,
                },
                true
            )
        );
    };

    return (
        <FixedSizeList
            {...tableDimensions}
            hasNextPage={false}
            isNextPageLoading={isFetching}
            items={data}
            loadNextPage={loadMore}
            minimumBatchSize={10}
            rowRenderer={(props) => PendingParticipantsListTile({ props })}
        />
    );
};

export default PendingParticipantsList;
