import React, { useEffect } from 'react';
import { get as _get } from 'lodash';
import ComponentContent from '@layouts/ComponentContent';
import { Table } from '@components';
import { ContestLeaderboardTableScorecardProps } from './types';
import { columnsSchemaGenerator } from './schema';
import { useDispatch, useSelector } from 'react-redux';
import { selectData } from './selector';
import ContestPageContentContestLeaderboardScorecardActions from './actions';
import { selectContestUUID } from '@pages/Contest/selector';

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
    console.log(items);
    return (
        <ComponentContent
            showSpinner={!isInitialized}
            className="contest-leaderboard-table-scorecard"
        >
            <Table columnsSchema={columnsSchema} items={items} />
        </ComponentContent>
    );
};

export default ContestLeaderboardTableScorecard;
