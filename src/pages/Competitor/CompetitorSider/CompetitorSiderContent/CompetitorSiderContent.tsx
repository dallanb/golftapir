import React from 'react';
import SiderLayoutContent from '@layouts/SiderLayout/SiderLayoutContent';
import CompetitorActions from './CompetitorActions';
import { CompetitorSiderContentProps } from './types';

const CompetitorSiderContent: React.FunctionComponent<CompetitorSiderContentProps> = ({}) => {
    return (
        <SiderLayoutContent>
            <CompetitorActions />
        </SiderLayoutContent>
    );
};

export default CompetitorSiderContent;
