import React from 'react';
import { useSelector } from 'react-redux';
import { get as _get } from 'lodash';
import { MemberHeaderProps } from './types';
import { ContentLayoutHeader } from '@layouts';
import { Breadcrumb } from '@components';
import CONSTANTS from '@locale/en-CA';
import constantRoutes from '@constants/routes';
import { selectMember, selectMemberAvatarSrc } from '@pages/Member/selector';
import './MemberHeader.less';

const MemberHeader: React.FunctionComponent<MemberHeaderProps> = () => {
    const member = useSelector(selectMember);
    const title = _get(member, ['display_name'], CONSTANTS.PAGES.MEMBER.TITLE);
    const avatar = {
        src: useSelector(selectMemberAvatarSrc),
        name: title,
    };
    const subTitle = CONSTANTS.PAGES.MEMBER.DESCRIPTION;
    const extra = <Breadcrumb route={constantRoutes.ROUTES.MEMBER.ROUTE} />;

    return (
        <ContentLayoutHeader
            avatar={{ ...avatar, shape: 'square', size: 36 }}
            title={title}
            subTitle={subTitle}
            extra={extra}
        />
    );
};

export default MemberHeader;
