import React from 'react';
import { useSelector } from 'react-redux';
import { get as _get } from 'lodash';
import { Avatar } from '@components';
import { withS3URL } from '@utils';
import { ContestUserProps } from './types';
import { selectAccountsHash, selectContest } from '../../selector';
import constants from '@constants';
import './ContestUser.scss';
import { Typography } from 'antd';

const ContestUser: React.FunctionComponent<ContestUserProps> = ({ user }) => {
    const contest = useSelector(selectContest);
    const name = `${user.first_name} ${user.last_name}`;
    const s3_filename = _get(user, ['avatar', 's3_filename'], undefined);
    const src =
        s3_filename &&
        withS3URL(s3_filename, constants.S3_FOLDERS.ACCOUNT.AVATAR);
    return (
        <div className="contest-user">
            <Avatar
                src={src}
                name={name}
                size={54}
                className="contest-user-avatar"
            />
            <Typography.Title level={5} className="contest-user-name">
                {name}
            </Typography.Title>
        </div>
    );
};

export default ContestUser;
