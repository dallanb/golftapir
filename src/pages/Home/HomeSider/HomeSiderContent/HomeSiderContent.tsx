import React from 'react';
import SiderLayoutContent from '@layouts/SiderLayout/SiderLayoutContent';
import { HomeSiderContentProps } from './types';
import CreateButton from './CreateButton';

const HomeSiderContent: React.FunctionComponent<HomeSiderContentProps> = ({}) => {
    return (
        <SiderLayoutContent>
            <CreateButton />
        </SiderLayoutContent>
    );
};

export default HomeSiderContent;
