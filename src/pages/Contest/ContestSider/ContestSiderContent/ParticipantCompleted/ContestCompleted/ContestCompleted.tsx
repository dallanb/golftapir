import React from 'react';
import { useSelector } from 'react-redux';
import { get as _get } from 'lodash';
import { CrownTwoTone } from '@ant-design/icons/lib';
import { ContestCompletedProps } from './types';
import ComponentContent from '@layouts/ComponentContent';
import { findLowestScoringParticipant } from '@pages/Contests/utils';
import { selectContestParticipants } from '@pages/Contest/selector';
import './ContestCompleted.less';

const ContestCompleted: React.FunctionComponent<ContestCompletedProps> = () => {
    const participants = useSelector(selectContestParticipants);
    const winner = findLowestScoringParticipant(participants);
    const name = _get(winner, ['display_name'], '');
    return (
        <ComponentContent className="contest-completed">
            <div className="contest-completed-label">Winner</div>
            <div className="contest-completed-value">{name}</div>
        </ComponentContent>
    );
};

export default ContestCompleted;
