import React from 'react';
import { HeaderTitleProps } from './types';
import { selectContestName } from '@pages/Contest/selector';
import './HeaderTitle.less';
import { useSelector } from 'react-redux';

const HeaderTitle: React.FunctionComponent<HeaderTitleProps> = () => {
    const title = useSelector(selectContestName);

    return (
        <div className="header-title">
            <div className="header-title-title">{title}</div>
        </div>
    );
};

export default HeaderTitle;
