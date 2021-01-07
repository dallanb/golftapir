import React from 'react';
import { useSelector } from 'react-redux';
import { get as _get } from 'lodash';
import { selectMembersHash } from '../../selector';
import { PendingParticipantsListTileProps } from './types';
import { prepareParticipant } from '@pages/Contest/utils';
import RemindButton from './RemindButton';
import './PendingParticipantsListTile.less';
import { selectContest } from '@pages/Contest/selector';

const PendingParticipantsListTile: React.FunctionComponent<PendingParticipantsListTileProps> = ({
    props: { index, style, data },
}) => {
    const item = _get(data, [index], undefined);
    const uuid = _get(item, ['uuid'], undefined);
    const member_uuid = _get(item, ['member_uuid'], undefined);
    const { name } = prepareParticipant(
        member_uuid,
        useSelector(selectContest),
        useSelector(selectMembersHash)
    );
    return (
        <div style={style} className="pending-participants-list-tile">
            <div className="pending-participants-list-tile-name">{name}</div>
            <div className="pending-participants-list-tile-remind-button">
                <RemindButton uuid={uuid} />
            </div>
        </div>
    );
};

export default PendingParticipantsListTile;
