import React from 'react';
import classnames from 'classnames';
import { Empty } from 'antd';
import { EmptyListProps } from './types';
import './EmptyList.less';

const EmptyList: React.FunctionComponent<EmptyListProps> = ({
    className,
    wrapperClassName,
    ...restProps
}) => {
    const cx = classnames(className);
    const wrapperCx = classnames('empty-list', wrapperClassName);
    return (
        <div className={wrapperCx}>
            <Empty className={cx} {...restProps} />
        </div>
    );
};

export default EmptyList;
