import React from 'react';
import { useSelector } from 'react-redux';
import { get as _get } from 'lodash';
import { CompetitorActionsProps } from './types';
import { selectData, selectIsMe } from '@pages/Competitor/selector';
import { memoizedGenerateActions } from './utils';
import { memoizedCompetitorActionRenderer } from './competitorActionRenderer';
import './CompetitorActions.less';

const CompetitorActions: React.FunctionComponent<CompetitorActionsProps> = () => {
    const isMe = useSelector(selectIsMe);
    const { member } = useSelector(selectData);
    const uuid = _get(member, ['uuid'], null);
    const actions = memoizedGenerateActions(uuid);

    const Actions = memoizedCompetitorActionRenderer({
        actions,
        isMe,
    });
    if (!Actions) return null;
    return <div className="competitor-actions">{Actions}</div>;
};

export default CompetitorActions;
