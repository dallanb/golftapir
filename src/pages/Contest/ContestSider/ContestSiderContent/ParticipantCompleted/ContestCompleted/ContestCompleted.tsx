import React from 'react';
import { useSelector } from 'react-redux';
import { get as _get } from 'lodash';
import { ContestCompletedProps } from './types';
import ComponentContent from '@layouts/ComponentContent';
import { findLowestScoringParticipant } from '@pages/Contests/utils';
// @ts-ignore
import Flags from 'country-flag-icons/react/3x2';
import {
    selectContestParticipants,
    selectIsInitialized,
} from '@pages/Contest/selector';
import { selectLeagueMembersDataHashByMember } from '@selectors/AppSelector';
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
        <ComponentContent
            className="contest-completed space"
            title="Winner"
            showSpinner={!isInitialized}
        >
            <div className="contest-completed-value">
                {Country && (
                    <Country className="contest-completed-value-country-flag" />
                )}
                <div className="contest-completed-value-name">{name}</div>
            </div>
        </ComponentContent>
    );
};

export default ContestCompleted;
