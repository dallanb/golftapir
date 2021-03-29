import React from 'react';
import { MembersListTileActivatedOnProps } from './types';
import './MembersListTileActivatedOn.less';
import { formatTimeStamp } from '@pages/Members/utils';
import CONSTANTS from '@locale/en-CA';

const MembersListTileActivatedOn: React.FunctionComponent<MembersListTileActivatedOnProps> = ({
    activatedOn,
}) => (
    <div className="activated-on">
        <div className="activated-on-label">
            {CONSTANTS.PAGES.MEMBERS.LIST.MEMBER_SINCE.toUpperCase()}
        </div>
        <div className="activated-on-content">
            {formatTimeStamp(activatedOn)}
        </div>
    </div>
);

export default MembersListTileActivatedOn;
