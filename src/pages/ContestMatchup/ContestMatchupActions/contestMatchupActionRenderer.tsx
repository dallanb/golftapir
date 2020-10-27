import React from 'react';
import memoize from 'memoize-one';
import { Button } from 'antd';
import { renderAction } from '../utils';
import { mapActionLabel } from '@utils';
import { contestActionRendererProps } from './types';

export const contestMatchupActionRenderer: React.FunctionComponent<contestActionRendererProps> = ({
    actions,
    status,
    participantSheet,
    isOwner,
}) =>
    actions.reduce((accumulatedActions: any[], { key, onClick }: any) => {
        const { show, enabled } = renderAction(key, {
            status,
            participantSheet,
            isOwner,
        });
        if (!show) return accumulatedActions;

        accumulatedActions.push(
            <Button
                key={key}
                onClick={onClick}
                disabled={!enabled}
                className="contest-matchup-actions-button"
            >
                {mapActionLabel(key)}
            </Button>
        );
        return accumulatedActions;
    }, []);

export const memoizedContestMatchupActionRenderer = memoize(
    contestMatchupActionRenderer
);
