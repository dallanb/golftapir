import React from 'react';
import { MembersListTileCreatedAtProps } from './types';
import './MembersListTileCreatedAt.less';
import { formatTimeStamp } from '@pages/Members/utils';

const MembersListTileCreatedAt: React.FunctionComponent<MembersListTileCreatedAtProps> = ({
    ctime,
}) => (
    <div className="created-at">
        <div className="created-at-label">MEMBER SINCE</div>
        <div className="created-at-content">{formatTimeStamp(ctime)}</div>
    </div>
);

export default MembersListTileCreatedAt;
