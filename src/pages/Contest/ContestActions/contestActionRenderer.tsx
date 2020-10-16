import React from 'react';
import memoize from 'memoize-one';
import { Button } from 'antd';
import { mapActionLabel, renderAction } from '../utils';
import { contestActionRendererProps } from './types';
import { render } from 'react-dom';

export const contestActionRenderer: React.FunctionComponent<contestActionRendererProps> = ({
    actions,
    status,
    participants,
    isOwner,
}) =>
    actions.reduce((accumulatedActions: any[], { key, onClick }: any) => {
        const { show, enabled } = renderAction(key, {
            status,
            participants,
            isOwner,
        });
        if (!show) return accumulatedActions;

        accumulatedActions.push(
            <Button
                key={key}
                onClick={onClick}
                disabled={!enabled}
                className="contest-actions-button"
            >
                {mapActionLabel(key)}
            </Button>
        );
        return accumulatedActions;
    }, []);

export const memoizedContestActionRenderer = memoize(contestActionRenderer);
