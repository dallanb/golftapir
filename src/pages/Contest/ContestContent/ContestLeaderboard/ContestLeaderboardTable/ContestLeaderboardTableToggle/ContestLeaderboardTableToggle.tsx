import React from 'react';
import { MinusCircleTwoTone, PlusCircleTwoTone } from '@ant-design/icons/lib';
import { ContestLeaderboardTableToggleProps } from './types';
import { useSelector } from 'react-redux';
import { selectContestStatus } from '@modules/Contest/selector';
import constants from '@constants';
import { Button } from 'antd';

const ContestLeaderboardTableToggle: React.FunctionComponent<ContestLeaderboardTableToggleProps> = ({
    row,
    listRef,
    toggleAllRows,
}) => {
    // try and maybe pass this in as a prop from the ultimate parent component (ContestLeaderboardTable)
    const contestStatus = useSelector(selectContestStatus);
    const disabled =
        contestStatus === constants.STATUS.PENDING.KEY ||
        contestStatus === constants.STATUS.INACTIVE.KEY;
    return (
        <Button
            type="text"
            icon={
                row.isExpanded ? <MinusCircleTwoTone /> : <PlusCircleTwoTone />
            }
            size={'small'}
            disabled={disabled}
            onClick={() => {
                if (!row.isExpanded) {
                    toggleAllRows(false);
                }
                row.toggleRowExpanded();
                listRef.current && listRef.current.resetAfterIndex(0);
            }}
        />
    );
};
export default ContestLeaderboardTableToggle;
