import React from 'react';
import { get as _get } from 'lodash';
import {
    DeleteTwoTone,
    EyeInvisibleTwoTone,
    EyeTwoTone,
} from '@ant-design/icons/lib';
import { Button } from 'antd';
import { TileActionsProps } from './types';

const TileActions: React.FunctionComponent<TileActionsProps> = ({
    item,
    actions,
}) => {
    const isRead = _get(item, ['read'], true);
    const _id = _get(item, ['_id'], undefined);
    return (
        <div className="tile-actions">
            <Button
                type="text"
                icon={isRead ? <EyeInvisibleTwoTone /> : <EyeTwoTone />}
                className="tile-action read"
                disabled={!_id}
                onClick={() =>
                    isRead ? actions.markAsUnread(_id) : actions.markAsRead(_id)
                }
            />
            <Button
                type="text"
                icon={<DeleteTwoTone />}
                className="tile-action delete"
                disabled={!_id}
                onClick={() => actions.markAsArchived(_id)}
            />
        </div>
    );
};

export default TileActions;
