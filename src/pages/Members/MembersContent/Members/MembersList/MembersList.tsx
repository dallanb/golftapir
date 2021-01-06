import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { MembersListProps } from './types';
import { FixedSizeList } from '@components';
import MembersPageContentMembersActions from '../actions';
import {
    selectListData,
    selectListIsFetching,
    selectListMetadata,
} from '../selector';
import MembersListTile from './MembersListTile';
import { getRefHeight } from '@utils';
import './MembersList.less';

const MembersList: React.FunctionComponent<MembersListProps> = ({
    containerRef,
}) => {
    const history = useHistory();

    const data = useSelector(selectListData);
    const metadata = useSelector(selectListMetadata);
    const isFetching = useSelector(selectListIsFetching);
    const tableDimensions = {
        size: 100,
        width: '100%',
        height: getRefHeight(containerRef, 200) - 32,
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
            rowRenderer={(props) => MembersListTile({ props, history })}
        />
    );
};

export default MembersList;
