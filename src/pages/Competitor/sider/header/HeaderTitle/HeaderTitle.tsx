import React from 'react';
import { HeaderTitleProps } from './types';
import './HeaderTitle.scss';

const HeaderTitle: React.FunctionComponent<HeaderTitleProps> = ({ name }) => {
    return (
        <div className="header-title">
            <div className="header-title-name">{name}</div>
        </div>
    );
};

export default HeaderTitle;
