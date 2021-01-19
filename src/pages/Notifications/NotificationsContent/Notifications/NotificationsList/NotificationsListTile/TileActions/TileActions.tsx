import React from 'react';
import { get as _get } from 'lodash';
import {
    DeleteTwoTone,
    EyeInvisibleTwoTone,
    EyeTwoTone,
} from '@ant-design/icons/lib';
import { Button } from 'antd';
import { TileActionsProps } from './types';

const TileActions: React.FunctionComponent<TileActionsProps> = ({ item }) => {
    const isRead = _get(item, ['read'], true);
    return (
        <div className="tile-actions">
            <Button
                type="text"
                icon={isRead ? <EyeInvisibleTwoTone /> : <EyeTwoTone />}
                className="tile-action read"
            />
            <Button
                type="text"
                icon={<DeleteTwoTone />}
                className="tile-action delete"
            />
        </div>
    );
};

export default TileActions;
