import React from 'react';
import SiderLayoutHeader from '@layouts/SiderLayout/SiderLayoutHeader';
import { useSelector } from 'react-redux';
import { selectMyAvatarSrc, selectMyName } from '@selectors/BaseSelector';
import HeaderTitle from './HeaderTitle';
import { ContestsSiderHeaderProps } from './types';

const ContestsSiderHeader: React.FunctionComponent<ContestsSiderHeaderProps> = () => {
    const title = <HeaderTitle />;
    const avatar = {
        name: useSelector(selectMyName),
        src: useSelector(selectMyAvatarSrc),
        size: 48,
    };
    return <SiderLayoutHeader title={title} avatar={avatar} />;
};

export default ContestsSiderHeader;
