import React from 'react';
import { useSelector } from 'react-redux';
import { get as _get, intersectionWith as _intersectionWith } from 'lodash';
import { MemberStandingsTableProps } from './types';
import { VirtualTable } from '@components';
import columnsSchema from './schema';
import { selectMembers } from '../selector';
import { selectLeagueMembersDataByStatus } from '@selectors/AppSelector';
import { intersectMembers } from './utils';
import './MemberStandingsTable.less';

const MemberStandingsTable: React.FunctionComponent<MemberStandingsTableProps> = ({}) => {
    const members = useSelector(selectMembers);
    const leagueMembers = useSelector(selectLeagueMembersDataByStatus);
    const activeLeagueMembers = _get(leagueMembers, ['active'], []);

    const items = intersectMembers(members, activeLeagueMembers);
    const bodyStyle = { height: items.length * 50 };

    const initialState = {
        sortBy: [{ id: 'stat.win_count', desc: true }],
    };
    const itemSize = (row: any): number => 50;

    return (
        <div className="member-standings-table">
            <div className="table-wrap">
                <VirtualTable
                    itemSize={itemSize}
                    className="member-standings-table-table"
                    headClassName="member-standings-table-header"
                    bodyClassName="member-standings-table-body"
                    bodyStyle={bodyStyle}
                    items={items}
                    hasNextPage={false}
                    isNextPageLoading={false}
                    minimumBatchSize={10}
                    columnsSchema={columnsSchema}
                    initialState={initialState}
                />
            </div>
        </div>
    );
};

export default React.memo(MemberStandingsTable);
