import React from 'react';
import SiderLayoutHeader from '@layouts/SiderLayout/SiderLayoutHeader';
import { useSelector } from 'react-redux';
import { selectMyAvatarSrc, selectMyName } from '@selectors/BaseSelector';
import { ContestsCreateSiderHeaderProps } from './types';

const ContestsCreateSiderHeader: React.FunctionComponent<ContestsCreateSiderHeaderProps> = () => {
    const title = useSelector(selectMyName);
    const avatar = {
        name: useSelector(selectMyName),
        src: useSelector(selectMyAvatarSrc),
        size: 48,
    };
    return <SiderLayoutHeader title={title} avatar={avatar} />;
};

export default ContestsCreateSiderHeader;
