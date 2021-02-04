import React from 'react';
import { EmptyList } from '@components';
import { InvitesListEmptyProps } from './types';
import './InvitesListEmpty.less';
import { Empty } from 'antd';

const InvitesListEmpty: React.FunctionComponent<InvitesListEmptyProps> = () => {
    return (
        <EmptyList
            description={'No invites'}
            image={Empty.PRESENTED_IMAGE_SIMPLE}
        />
    );
};

export default InvitesListEmpty;
