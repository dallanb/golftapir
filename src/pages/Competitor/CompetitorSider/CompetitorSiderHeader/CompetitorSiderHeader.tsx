import React from 'react';
import SiderLayoutHeader from '@layouts/SiderLayout/SiderLayoutHeader';
import { useSelector } from 'react-redux';
import { selectMyAvatarSrc, selectMyName } from '@selectors/BaseSelector';
import { CompetitorSiderHeaderProps } from './types';
import HeaderTitle from '@pages/Competitor/CompetitorSider/CompetitorSiderHeader/HeaderTitle';

const CompetitorSiderHeader: React.FunctionComponent<CompetitorSiderHeaderProps> = () => {
    const title = <HeaderTitle />;
    const avatar = {
        name: useSelector(selectMyName),
        src: useSelector(selectMyAvatarSrc),
        size: 48,
    };
    return <SiderLayoutHeader title={title} avatar={avatar} />;
};

export default CompetitorSiderHeader;
