import React from 'react';
import { Badge } from 'antd';
import { useSelector } from 'react-redux';
import { mapStatusColour } from '@utils';
import { HeaderTitleProps } from './types';
import { selectMyDisplayName } from '@selectors/BaseSelector';
import { selectMyParticipantStatus } from '@pages/Contest/selector';
import './HeaderTitle.less';

const HeaderTitle: React.FunctionComponent<HeaderTitleProps> = () => {
    const name = useSelector(selectMyDisplayName);
    const status = useSelector(selectMyParticipantStatus);
    return (
        <div className="header-title">
            <div className="header-title-name">{name}</div>
            <div className="header-title-status">
                <Badge color={mapStatusColour(status)} text={status} />
            </div>
        </div>
    );
};

export default HeaderTitle;
