import React from 'react';
import { useSelector } from 'react-redux';
import { get as _get } from 'lodash';
import { Badge } from 'antd';
import { ContestsProps } from './types';
import { formatTimeStamp } from './utils';
import './List.less';

const List: React.FunctionComponent<ContestsProps> = ({
    date,
    data,
    onClick,
}) => {
    const items = _get(data, [date.date()], []);

    return (
        <div className="list">
            {items.map((item: any) => (
                <div
                    key={item.uuid}
                    onClick={() => onClick(item)}
                    className="list-item"
                >
                    <div className="list-item-badge">
                        <Badge color="green" />
                    </div>
                    <div className="list-item-name">{item.name}</div>
                    <div className="list-item-date">
                        {formatTimeStamp(item.start_time)}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default List;
