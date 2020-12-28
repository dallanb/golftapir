import React from 'react';
import { LeaguesListTileDateProps } from './types';
import constants from '@constants';
// import { formatTimeStamp } from '@pages/Leagues/utils';
import './LeaguesListTileDate.less';

const LeaguesListTileDate: React.FunctionComponent<LeaguesListTileDateProps> = ({
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
                {/*<div className="date-content">{formatTimeStamp(date)}</div>*/}
            </div>
        );
    }
    return null;
};

export default LeaguesListTileDate;
