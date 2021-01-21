import React from 'react';
import { CaretDownFilled, CaretUpFilled } from '@ant-design/icons/lib';
import { ContestLeaderboardTablePositionProps } from './types';
import './ContestLeaderboardTablePosition.less';

const ContestLeaderboardTablePosition: React.FunctionComponent<ContestLeaderboardTablePositionProps> = ({
    row: { original },
}) => {
    const { rank = 'NA', count = '', trend } = original;
    const prefix = count > 1 ? 'T' : '';
    const pos = `${prefix}${rank}`;

    const renderTrendIcon = (key: string) => {
        switch (key) {
            case 'upward':
                return (
                    <CaretUpFilled className="contest-leaderboard-table-position-icon-up" />
                );
            case 'downward':
                return (
                    <CaretDownFilled className="contest-leaderboard-table-position-icon-down" />
                );
            // case 'sideway':
        }
    };
    return (
        <div className="contest-leaderboard-table-position">
            <div className="contest-leaderboard-table-position-icon">
                {renderTrendIcon(trend)}
            </div>
            <div className="contest-leaderboard-table-position-rank">{pos}</div>
        </div>
    );
};
export default ContestLeaderboardTablePosition;
