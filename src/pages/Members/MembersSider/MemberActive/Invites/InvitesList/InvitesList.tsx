import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { get as _get } from 'lodash';
import { InvitesListProps } from './types';
import { FixedSizeList } from '@components';
import MembersPageSiderInvitesActions from '../actions';
import InvitesListTile from './InvitesListTile';
import InvitesListEmpty from './InvitesListEmpty';
import { getRefHeight } from '@utils';
import './InvitesList.less';

const InvitesList: React.FunctionComponent<InvitesListProps> = ({
    containerRef,
    containerDimensions,
    data,
    isFetching,
}) => {
    const history = useHistory();

    const tableDimensions = {
        size: 50,
        width: '100%',
        height: _get(
            containerDimensions,
            ['height'],
            getRefHeight(containerRef, 200)
        ),
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
            rowRenderer={(props) => InvitesListTile({ props, history })}
            empty={<InvitesListEmpty />}
        />
    );
};

export default InvitesList;
