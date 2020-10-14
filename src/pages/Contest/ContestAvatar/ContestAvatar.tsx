import React from 'react';
import { useSelector } from 'react-redux';
import { get as _get } from 'lodash';
import { Avatar } from '@components';
import { withS3URL } from '@utils';
import { ContestAvatarProps } from './types';
import { selectContest } from '../selector';
import './ContestAvatar.scss';
import constants from '@constants';

const ContestAvatar: React.FunctionComponent<ContestAvatarProps> = ({
    size,
}) => {
    const contest = useSelector(selectContest);
    const name = contest.name;
    const s3_filename = _get(contest, ['avatar', 's3_filename'], undefined);
    const src =
        s3_filename &&
        withS3URL(s3_filename, constants.S3_FOLDERS.CONTEST.AVATAR);
    return (
        <Avatar src={src} name={name} size={size} className="contest-avatar" />
    );
};

export default ContestAvatar;
