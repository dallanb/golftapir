import React from 'react';
import { ContestsListTileDateProps } from './types';
import constants from '@constants';
import { formatTimeStamp } from '@pages/Contest/utils';
import './ContestsListTileDate.less';

const ContestsListTileDate: React.FunctionComponent<ContestsListTileDateProps> = ({
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

export default ContestsListTileDate;
