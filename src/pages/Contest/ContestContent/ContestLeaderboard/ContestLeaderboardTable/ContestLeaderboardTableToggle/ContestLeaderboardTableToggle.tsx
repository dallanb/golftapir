import React from 'react';
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { ContestLeaderboardTableToggleProps } from './types';

const ContestLeaderboardTableToggle: React.FunctionComponent<ContestLeaderboardTableToggleProps> = ({
    row,
    listRef,
}) => (
    <span
        {...row.getToggleRowExpandedProps()}
        onClick={() => {
            row.toggleRowExpanded();
            listRef.current && listRef.current.resetAfterIndex(0);
        }}
    >
        {row.isExpanded ? <MinusCircleOutlined /> : <PlusCircleOutlined />}
    </span>
);
export default ContestLeaderboardTableToggle;
