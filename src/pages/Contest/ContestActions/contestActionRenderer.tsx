import React from 'react';
import memoize from 'memoize-one';
import { Button } from 'antd';
import { mapActionLabel, renderAction } from '../utils';
import { contestActionRendererProps } from './types';

export const contestActionRenderer: React.FunctionComponent<contestActionRendererProps> = ({
    actions,
    status,
    participants,
}) =>
    actions.reduce((accumulatedActions: any[], { key, onClick }: any) => {
        accumulatedActions.push(
            <Button
                key={key}
                onClick={onClick}
                disabled={!renderAction(key, { status, participants })}
                className="contest-actions-button"
            >
                {mapActionLabel(key)}
            </Button>
        );
        return accumulatedActions;
    }, []);

export const memoizedContestActionRenderer = memoize(contestActionRenderer);
