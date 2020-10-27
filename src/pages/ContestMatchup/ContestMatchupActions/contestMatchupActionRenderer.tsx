import React from 'react';
import memoize from 'memoize-one';
import { Button } from 'antd';
import { renderAction } from '../utils';
import { mapActionLabel } from '@utils';
import { contestActionRendererProps } from './types';

export const contestMatchupActionRenderer: React.FunctionComponent<contestActionRendererProps> = ({
    actions,
    uuid,
    status,
    participantSheet,
    isOwner,
}) =>
    actions.reduce(
        (accumulatedActions: any[], { key, onClick: onClickFunc }: any) => {
            const { show, enabled, onClick } = renderAction(key, {
                uuid,
                status,
                participantSheet,
                isOwner,
                onClickFunc,
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
        },
        []
    );

export const memoizedContestMatchupActionRenderer = memoize(
    contestMatchupActionRenderer
);
