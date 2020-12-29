import React from 'react';
import { useSelector } from 'react-redux';
import { selectMyDisplayName, selectMyUsername } from '@selectors/BaseSelector';
import { HeaderTitleProps } from './types';
import './HeaderTitle.less';

const HeaderTitle: React.FunctionComponent<HeaderTitleProps> = () => {
    const name = useSelector(selectMyDisplayName);
    const username = useSelector(selectMyUsername);
    return (
        <div className="header-title">
            <div className="header-title-name">{name}</div>
            <div className="header-title-username">{username}</div>
        </div>
    );
};

export default HeaderTitle;
