import React from 'react';
import SiderLayoutContent from '@layouts/SiderLayout/SiderLayoutContent';
import { HomeSiderProps } from './types';
import CreateButton from './CreateButton';

const HomeSiderContent: React.FunctionComponent<HomeSiderProps> = ({}) => {
    return (
        <SiderLayoutContent>
            <CreateButton />
        </SiderLayoutContent>
    );
};

export default HomeSiderContent;
