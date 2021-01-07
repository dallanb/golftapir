import React from 'react';
import { ContestTileDateProps } from './types';
import constants from '@constants';
import { formatTimeStamp } from '@pages/Contest/utils';
import './ContestTileDate.less';

const ContestTileDate: React.FunctionComponent<ContestTileDateProps> = ({
    date,
    status,
}) => {
    if (
        status === constants.STATUS.PENDING.KEY ||
        status === constants.STATUS.READY.KEY
    ) {
        return (
            <div className="date">
                <div className="date-label">DATE</div>
                <div className="date-content">{formatTimeStamp(date)}</div>
            </div>
        );
    }
    return null;
};

export default ContestTileDate;
