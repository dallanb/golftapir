import React from 'react';
import { CompetitorsListTileUsernameProps } from './types';
import './CompetitorsListTileUsername.less';

const CompetitorsListTileUsername: React.FunctionComponent<CompetitorsListTileUsernameProps> = ({
    username,
}) => {
    return (
        <div className="username">
            <div className="username-label">USERNAME</div>
            <div className="username-content">
                {username}
            </div>
        </div>
    );
};

export default CompetitorsListTileUsername;
