import { Select, Tag } from 'antd';
import _ from 'lodash';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectCreateFormSearchParticipants } from '@pages/ContestsCreate/selector';
import { selectMe } from '@selectors/BaseSelector';

export const participantSearchSelectTagRenderer = (props: any) => {
    const { label, closable, onClose } = props;
    return (
        <Tag closable={closable} onClose={onClose} style={{ marginRight: 3 }}>
            {label}
        </Tag>
    );
};

export const participantSearchSelectOptionRenderer = () => {
    const me = useSelector(selectMe);
    const participants = _.keyBy(
        [...useSelector(selectCreateFormSearchParticipants), me],
        'membership_uuid'
    );
    return Object.values(
        participants
    ).map(
        (participant: {
            membership_uuid: string;
            first_name: string;
            last_name: string;
        }) => (
            <Select.Option
                key={participant.membership_uuid}
                value={participant.membership_uuid}
                disabled={participant.membership_uuid === me.membership_uuid}
            >{`${participant.first_name} ${participant.last_name}`}</Select.Option>
        )
    );
};
