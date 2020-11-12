import React from 'react';
import { Badge } from 'antd';
import { get as _get } from 'lodash';
import { mapStatusColour } from '@utils';
import { ContestSiderTitleProps } from './types';
import './ContestSiderTitle.scss';

const ContestSiderTitle: React.FunctionComponent<ContestSiderTitleProps> = ({
    name,
    status,
}) => {
    return (
        <div className="contest-sider-title">
            <div className="contest-sider-title-name">{name}</div>
            <div className="contest-sider-title-status">
                <Badge color={mapStatusColour(status)} text={status} />
            </div>
        </div>
    );
};

export default ContestSiderTitle;
