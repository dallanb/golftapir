import React from 'react';
import { useSelector } from 'react-redux';
import { selectMyName } from '@selectors/BaseSelector';
import { HeaderTitleProps } from './types';
import './HeaderTitle.scss';

const HeaderTitle: React.FunctionComponent<HeaderTitleProps> = () => {
    const name = useSelector(selectMyName);
    return (
        <div className="header-title">
            <div className="header-title-name">{name}</div>
        </div>
    );
};

export default HeaderTitle;
