import React from 'react';
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { ContestLeaderboardTableToggleProps } from './types';

const ContestLeaderboardTableToggle: React.FunctionComponent<ContestLeaderboardTableToggleProps> = ({
    row,
    listRef,
    toggleAllRows,
}) => (
    <span
        {...row.getToggleRowExpandedProps()}
        onClick={() => {
            if (!row.isExpanded) {
                toggleAllRows(false);
            }
            row.toggleRowExpanded();
            listRef.current && listRef.current.resetAfterIndex(0);
        }}
    >
        {row.isExpanded ? <MinusCircleOutlined /> : <PlusCircleOutlined />}
    </span>
);
export default ContestLeaderboardTableToggle;
