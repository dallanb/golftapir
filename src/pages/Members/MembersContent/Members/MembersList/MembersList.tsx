import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { MembersListProps } from './types';
import { FixedSizeList } from '@components';
import MembersPageContentMembersActions from '../actions';
import MembersListTile from './MembersListTile';
import { getRefHeight } from '@utils';
import './MembersList.less';

const MembersList: React.FunctionComponent<MembersListProps> = ({
    containerRef,
    data,
    metadata,
    options,
    isFetching,
}) => {
    const history = useHistory();
    const params = useParams();

    const tableDimensions = {
        size: 100,
        width: '100%',
        height: getRefHeight(containerRef, 200) - 61,
    };

    const dispatch = useDispatch();
    const loadMore = (start: number, stop: number) => {
        dispatch(
            MembersPageContentMembersActions.fetchData(
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
        <FixedSizeList
            {...tableDimensions}
            items={data}
            hasNextPage={hasNextPage()}
            loadNextPage={loadMore}
            isNextPageLoading={isFetching}
            minimumBatchSize={10}
            rowRenderer={(props) => MembersListTile({ props, history, params })}
        />
    );
};

export default MembersList;
