import React from 'react';
import { ContestsSiderTitleProps } from './types';
import './ContestsSiderTitle.scss';

const ContestsSiderTitle: React.FunctionComponent<ContestsSiderTitleProps> = ({
    name,
}) => {
    return (
        <div className="contests-sider-title">
            <div className="contests-sider-title-name">{name}</div>
        </div>
    );
};

export default ContestsSiderTitle;
