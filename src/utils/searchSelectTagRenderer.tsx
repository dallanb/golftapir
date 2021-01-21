import { Tag } from 'antd';
import React from 'react';

const participantSearchSelectTagRenderer = (props: any) => {
    const { label, closable, onClose } = props;
    return (
        <Tag
            closable={closable}
            onClose={onClose}
            style={{ marginRight: 3, display: 'flex', alignItems: 'center' }}
        >
            {label}
        </Tag>
    );
};

export default participantSearchSelectTagRenderer;
