import { Select } from 'antd';
import React from 'react';

export const participantSearchSelectOptionRenderer = (participants: any[]) =>
    participants.map(
        (participant: {
            uuid: string;
            first_name: string;
            last_name: string;
        }) => (
            <Select.Option
                key={participant.uuid}
                value={participant.uuid}
            >{`${participant.first_name} ${participant.last_name}`}</Select.Option>
        )
    );
