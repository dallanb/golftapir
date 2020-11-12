import React from 'react';
import { useSelector } from 'react-redux';
import { Badge } from 'antd';
import { get as _get } from 'lodash';
import { Avatar } from '@components';
import { mapStatusColour, withS3URL } from '@utils';
import { ContestUserProps } from './types';
import { selectParticipant } from '../../selector';
import constants from '@constants';
import './ContestUser.scss';

const ContestUser: React.FunctionComponent<ContestUserProps> = ({ user }) => {
    const participant = useSelector(selectParticipant);
    const name = `${user.first_name} ${user.last_name}`;
    const s3_filename = _get(user, ['avatar', 's3_filename'], undefined);
    const src =
        s3_filename &&
        withS3URL(s3_filename, constants.S3_FOLDERS.ACCOUNT.AVATAR);
    const status = _get(participant, ['status'], 'spectator');
    return (
        <div className="contest-user">
            <Avatar
                src={src}
                name={name}
                size={54}
                className="contest-user-avatar"
            />
            <div className="contest-user-personal-info">
                <div className="contest-user-name">{name}</div>
                <div className="contest-user-status">
                    <Badge color={mapStatusColour(status)} text={status} />
                </div>
            </div>
        </div>
    );
};

export default ContestUser;
