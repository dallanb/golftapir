import React from 'react';
import { useSelector } from 'react-redux';
import { HeaderTitleProps } from './types';
import { selectMyName } from '@selectors/BaseSelector';
import './HeaderTitle.less';

const HeaderTitle: React.FunctionComponent<HeaderTitleProps> = () => {
    const name = useSelector(selectMyName);
    return (
        <div className="header-title">
            <div className="header-title-name">{name}</div>
        </div>
    );
};

export default HeaderTitle;
