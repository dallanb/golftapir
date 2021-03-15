import React from 'react';
import { MembersListTileActivatedOnProps } from './types';
import './MembersListTileActivatedOn.less';
import { formatTimeStamp } from '@pages/Members/utils';

const MembersListTileActivatedOn: React.FunctionComponent<MembersListTileActivatedOnProps> = ({
    activatedOn,
}) => (
    <div className="activated-on">
        <div className="activated-on-label">MEMBER SINCE</div>
        <div className="activated-on-content">
            {formatTimeStamp(activatedOn)}
        </div>
    </div>
);

export default MembersListTileActivatedOn;
