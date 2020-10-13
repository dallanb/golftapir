import { Tag } from 'antd';
import React from 'react';

const participantSearchSelectTagRenderer = (props: any) => {
    const { label, closable, onClose } = props;
    return (
        <Tag closable={closable} onClose={onClose} style={{ marginRight: 3 }}>
            {label}
        </Tag>
    );
};

export default participantSearchSelectTagRenderer;
