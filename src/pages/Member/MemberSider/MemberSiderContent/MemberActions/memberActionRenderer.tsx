import React, { ReactElement } from 'react';
import memoize from 'memoize-one';
import { Button } from 'antd';
import { renderAction } from './utils';
import { mapActionLabel } from '@utils';
import { memberActionRendererProps } from './types';

export const memberActionRenderer = ({
    actions,
    isMe,
}: memberActionRendererProps): ReactElement[] =>
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
                className="member-actions-button"
            >
                {mapActionLabel(key)}
            </Button>
        );
        return accumulatedActions;
    }, []);

export const memoizedMemberActionRenderer = memoize(memberActionRenderer);
