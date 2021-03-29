import React from 'react';
import { get as _get } from 'lodash';
import { MemberTileProps } from './types';
import { withS3URL } from '@utils';
import { Avatar } from '@components';
import './MemberTile.less';

const MemberTile: React.FunctionComponent<MemberTileProps> = ({ member }) => {
    const name = _get(member, ['display_name'], '');
    const username = _get(member, ['username'], '');
    const avatar = _get(member, ['avatar'], undefined);
    const src = withS3URL(avatar);
    return (
        <div className="member-tile">
            <div className="member-tile-avatar">
                <Avatar
                    name={name}
                    src={src}
                    size={20}
                    shape={'square'}
                    border
                />
            </div>
            <div className="member-tile-name">{name}</div>
            <div className="member-tile-username">{username}</div>
        </div>
    );
};

export default MemberTile;
