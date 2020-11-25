import React from 'react';
import SiderLayoutHeader from '@layouts/SiderLayout/SiderLayoutHeader';
import { pick as _pick } from 'lodash';
import { useSelector } from 'react-redux';
import { selectData } from './selector';
import { CompetitorSiderHeaderProps } from './types';
import HeaderTitle from '@pages/Competitor/sider/header/HeaderTitle';

const CompetitorSiderHeader: React.FunctionComponent<CompetitorSiderHeaderProps> = () => {
    const headerProps = _pick(useSelector(selectData), [
        'isFetching',
        'title',
        'avatar',
    ]);
    headerProps['title'] = <HeaderTitle name={headerProps['title']} />;
    return <SiderLayoutHeader {...headerProps} />;
};

export default CompetitorSiderHeader;
