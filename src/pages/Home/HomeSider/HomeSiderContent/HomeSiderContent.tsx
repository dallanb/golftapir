import React from 'react';
import SiderLayoutContent from '@layouts/SiderLayout/SiderLayoutContent';
import Calendar from './Calendar';
import { HomeSiderContentProps } from './types';

const HomeSiderContent: React.FunctionComponent<HomeSiderContentProps> = ({}) => {
    return (
        <SiderLayoutContent>
            <div />
            {/*<Calendar/>*/}
        </SiderLayoutContent>
    );
};

export default HomeSiderContent;
