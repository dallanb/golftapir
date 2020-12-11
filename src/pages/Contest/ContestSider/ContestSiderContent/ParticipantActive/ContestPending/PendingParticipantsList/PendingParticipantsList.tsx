import React, { ReactText, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ComponentContent from '@layouts/ComponentContent';
import { FixedSizeList } from '@components';
import { PendingParticipantsListProps } from './types';
import PendingParticipantsListTile from './PendingParticipantsListTile';
import { selectData, selectListData, selectListIsFetching } from '../selector';
import ContestPageSiderContentParticipantActiveContestPendingActions from '../actions';
import './PendingParticipantsList.less';
import { getRefHeight } from '@utils';

const PendingParticipantsList: React.FunctionComponent<PendingParticipantsListProps> = () => {
    const dispatch = useDispatch();
    const ref = useRef(null);
    const { isInitialized } = useSelector(selectData);
    const data = useSelector(selectListData);
    const isFetching = useSelector(selectListIsFetching);
    const containerDimensions = {
        height: Math.min(200, data.length * 50 + 32),
    };
    const tableDimensions = {
        size: 50,
        width: '100%',
        height: Math.min(getRefHeight(ref, 200) - 32),
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
        <ComponentContent
            className="pending-participants"
            style={{ ...containerDimensions }}
            componentRef={ref}
            showSpinner={!isInitialized}
        >
            <FixedSizeList
                {...tableDimensions}
                hasNextPage={false}
                isNextPageLoading={isFetching}
                items={data}
                loadNextPage={loadMore}
                minimumBatchSize={10}
                rowRenderer={(props) => PendingParticipantsListTile({ props })}
            />
        </ComponentContent>
    );
};

export default PendingParticipantsList;
