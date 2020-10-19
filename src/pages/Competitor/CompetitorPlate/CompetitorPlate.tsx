import React from 'react';
import { Typography } from 'antd';
import { useSelector } from 'react-redux';
import { Avatar } from '@components';
import { withS3URL } from '@utils';
import { CompetitorPlateProps } from './types';
import { selectAccountAvatar, selectAccountName } from '../selector';
import './CompetitorPlate.scss';

const CompetitorPlate: React.FunctionComponent<CompetitorPlateProps> = ({}) => {
    const avatar = useSelector(selectAccountAvatar);
    const src = avatar.s3_filename && withS3URL(avatar.s3_filename);
    const name = useSelector(selectAccountName);
    return (
        <div className="competitor-plate">
            <Avatar src={src} name={name} size={96} />
            <div className="competitor-plate-info">
                <div className="competitor-plate-user-name">
                    <Typography.Title level={2}>{name}</Typography.Title>
                </div>
                <div>placeholder</div>
            </div>
        </div>
    );
};

export default CompetitorPlate;
