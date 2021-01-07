import React from 'react';
import ComponentContent from '@layouts/ComponentContent';
import { ContestActiveProps } from './types';
import './ContestActive.less';

const ContestActive: React.FunctionComponent<ContestActiveProps> = () => {
    return (
        <ComponentContent className="contest-active">
            Please wait for the rest of the participants to mark contest as
            Complete
        </ComponentContent>
    );
};

export default ContestActive;
