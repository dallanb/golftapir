import React from 'react';
import { MinusCircleTwoTone, PlusCircleTwoTone } from '@ant-design/icons/lib';
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
        {row.isExpanded ? <MinusCircleTwoTone /> : <PlusCircleTwoTone />}
    </span>
);
export default ContestLeaderboardTableToggle;
