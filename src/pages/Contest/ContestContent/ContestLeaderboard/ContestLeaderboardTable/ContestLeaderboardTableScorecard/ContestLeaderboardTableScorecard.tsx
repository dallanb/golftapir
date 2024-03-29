import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spin } from 'antd';
import { Table } from '@components';
import { ContestLeaderboardTableScorecardProps } from './types';
import { columnsSchemaGenerator } from './schema';
import { selectData } from './selector';
import renderRow from './renderRow';
import ContestPageContentContestLeaderboardScorecardActions from './actions';
import ScorecardParticipant from './ScorecardParticipant';
import HoleScoreInfo from './HoleScoreInfo';
import { selectContestUUID } from '@modules/Contest/selector';
import './ContestLeaderboardTableScorecard.less';

const ContestLeaderboardTableScorecard: React.FunctionComponent<ContestLeaderboardTableScorecardProps> = ({
    row,
}) => {
    const dispatch = useDispatch();

    const { isInitialized, data: items } = useSelector(selectData);
    const uuid = useSelector(selectContestUUID);
    const {
        original: { uuid: user },
    } = row;
    useEffect(() => {
        dispatch(
            ContestPageContentContestLeaderboardScorecardActions.init(
                uuid,
                user
            )
        );
        return () => {
            dispatch(
                ContestPageContentContestLeaderboardScorecardActions.terminate()
            );
        };
    }, []);

    const columnsSchema = columnsSchemaGenerator(19);
    if (!isInitialized) return <Spin />;
    return (
        <div
            className="contest-leaderboard-table-scorecard"
            // bodyClassName="contest-leaderboard-table-scorecard-body"
        >
            <div className="contest-leaderboard-table-scorecard-participant-wrapper">
                <ScorecardParticipant user={user} />
            </div>
            <div className="contest-leaderboard-table-scorecard-table-wrapper">
                <Table
                    rowRenderer={renderRow}
                    columnsSchema={columnsSchema}
                    items={items}
                    header={false}
                    style={{ height: '160px', width: '100%' }}
                />
                <HoleScoreInfo />
            </div>
        </div>
    );
};

export default ContestLeaderboardTableScorecard;
