import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { InvitesListProps } from './types';
import { FixedSizeList } from '@components';
import MembersPageSiderContentInvitesActions from '../actions';
import InvitesListTile from './InvitesListTile';
import InvitesListEmpty from './InvitesListEmpty';
import { getRefHeight } from '@utils';
import './InvitesList.less';

const InvitesList: React.FunctionComponent<InvitesListProps> = ({
    containerRef,
    data,
    metadata,
    options,
    isFetching,
}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const refHeight = getRefHeight(containerRef, 200);

    const tableDimensions = {
        size: 50,
        width: '100%',
        height: refHeight,
    };

    const loadMore = (start: number, stop: number) => {
        dispatch(
            MembersPageSiderContentInvitesActions.fetchData(
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
            rowRenderer={(props) => InvitesListTile({ props, history })}
            empty={<InvitesListEmpty />}
        />
    );
};

export default InvitesList;
