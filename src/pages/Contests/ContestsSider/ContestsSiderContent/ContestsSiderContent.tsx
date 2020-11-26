import React from 'react';
import SiderLayoutContent from '@layouts/SiderLayout/SiderLayoutContent';
import CreateButton from './CreateButton';
import { ContestsSiderContentProps } from './types';

const ContestsSiderContent: React.FunctionComponent<ContestsSiderContentProps> = ({}) => {
    return (
        <SiderLayoutContent>
            <CreateButton />
        </SiderLayoutContent>
    );
};

export default ContestsSiderContent;
