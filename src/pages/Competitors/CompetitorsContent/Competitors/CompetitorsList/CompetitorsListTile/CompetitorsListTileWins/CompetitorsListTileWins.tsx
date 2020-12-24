import React from 'react';
import { CompetitorsListTileWinsProps } from './types';
import './CompetitorsListTileWins.less';

const CompetitorsListTileWins: React.FunctionComponent<CompetitorsListTileWinsProps> = ({
    wins,
}) => (
    <div className="wins">
        <div className="wins-label">WINS</div>
        <div className="wins-content">{wins}</div>
    </div>
);

export default CompetitorsListTileWins;
