import React from 'react';
import memoize from 'memoize-one';
import { Button } from 'antd';
import { renderAction } from '../../utils';
import { mapActionLabel } from '@utils';
import { competitorActionRendererProps } from './types';

export const competitorActionRenderer: React.FunctionComponent<competitorActionRendererProps> = ({
    actions,
    isMe,
}) =>
    actions.reduce((accumulatedActions: any[], { key, onClick }: any) => {
        const { show, enabled } = renderAction(key, {
            status,
            isMe,
        });
        if (!show) return accumulatedActions;

        accumulatedActions.push(
            <Button
                block
                type="primary"
                key={key}
                onClick={onClick}
                disabled={!enabled}
                className="competitor-actions-button"
            >
                {mapActionLabel(key)}
            </Button>
        );
        return accumulatedActions;
    }, []);

export const memoizedCompetitorActionRenderer = memoize(
    competitorActionRenderer
);
