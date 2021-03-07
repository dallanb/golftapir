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
    isFetching,
}) => {
    const history = useHistory();
    const params = useParams();

    const tableDimensions = {
        size: 100,
        width: '100%',
        height: getRefHeight(containerRef, 200),
    };

    const loadMore = (start: number, stop: number) => null;

    const hasNextPage = false;

    return (
        <FixedSizeList
            {...tableDimensions}
            items={data}
            hasNextPage={hasNextPage}
            loadNextPage={loadMore}
            isNextPageLoading={isFetching}
            minimumBatchSize={10}
            rowRenderer={(props) => MembersListTile({ props, history, params })}
        />
    );
};

export default MembersList;
