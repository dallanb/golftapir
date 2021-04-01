import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { MembersListProps } from './types';
import { FixedSizeList } from '@components';
import { selectLeagueMemberStatus } from '@selectors/AppSelector';
import MembersListTile from './MembersListTile';
import { getRefHeight, statusToRole } from '@utils';
import './MembersList.less';
import constants from '@constants';

const MembersList: React.FunctionComponent<MembersListProps> = ({
    containerRef,
    data,
    isFetching,
}) => {
    const history = useHistory();
    const params = useParams();
    const memberStatus = useSelector(selectLeagueMemberStatus);
    const role = statusToRole(memberStatus);
    const readOnly = role < constants.ROLE.ACTIVE;
    // TODO: Add the crown

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
            rowRenderer={(props) =>
                MembersListTile({ props, history, params, readOnly })
            }
        />
    );
};

export default MembersList;
