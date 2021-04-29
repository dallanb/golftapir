import React from 'react';
import { useSelector } from 'react-redux';
import { get as _get } from 'lodash';
import { ContestCompletedProps } from './types';
import { SiderComponentContent } from '@layouts/ComponentContent';
import { findLowestScoringParticipant } from '@pages/Contests/utils';
// @ts-ignore
import Flags from 'country-flag-icons/react/3x2';
import {
    selectIsInitialized,
    selectContestParticipants,
} from '@modules/Contest/selector';
import { selectLeagueMembersDataHashByMember } from '@selectors/AppSelector';
import CONSTANTS from '@locale/en-CA';
import './ContestCompleted.less';

const ContestCompleted: React.FunctionComponent<ContestCompletedProps> = () => {
    const isInitialized = useSelector(selectIsInitialized);
    const participants = useSelector(selectContestParticipants);
    const membersHash = useSelector(selectLeagueMembersDataHashByMember);
    const winner = findLowestScoringParticipant(participants);
    const name = _get(winner, ['display_name'], 'NA');
    const uuid = _get(winner, ['member_uuid'], '');
    const country = _get(membersHash, [uuid, 'country'], undefined);
    const Country = _get(Flags, [country], null);
    return (
        <SiderComponentContent
            className="contest-completed space"
            title={CONSTANTS.PAGES.CONTEST.WINNER}
            showSpinner={!isInitialized}
        >
            <div className="contest-completed-value">
                {Country && (
                    <Country className="contest-completed-value-country-flag" />
                )}
                <div className="contest-completed-value-name">{name}</div>
            </div>
        </SiderComponentContent>
    );
};

export default ContestCompleted;
