import { Select, Tag } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectCreateFormSearchParticipants } from '@pages/ContestsCreate/selector';
import { selectMe } from '@selectors/BaseSelector';

export const participantSearchSelectTagRenderer = (props: any) => {
    console.log(props);
    const { label, closable, onClose } = props;

    return (
        <Tag closable={closable} onClose={onClose} style={{ marginRight: 3 }}>
            {label}
        </Tag>
    );
};

export const participantSearchSelectOptionRenderer = () => {
    const participants = useSelector(selectCreateFormSearchParticipants);
    const me = useSelector(selectMe);
    console.log(participants);
    return participants.map(
        (participant: {
            uuid: string;
            first_name: string;
            last_name: string;
        }) => (
            <Select.Option
                key={participant.uuid}
                value={participant.uuid}
                disabled={participant.uuid === me.uuid}
            >{`${participant.first_name} ${participant.last_name}`}</Select.Option>
        )
    );
};
