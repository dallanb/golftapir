import React from 'react';
import { Skeleton } from 'antd';

const ExtraMemberSkeleton: React.FunctionComponent = () => {
    return (
        <div className="nav-extra-user">
            <div className="nav-extra-user-avatar-wrapper">
                <Skeleton.Avatar
                    shape="square"
                    size={36}
                    className="nav-extra-user-avatar"
                />
            </div>
            <div className="nav-extra-user-name">
                <Skeleton.Input
                    style={{ width: 90 }}
                    className="nav-extra-user-name-display-name"
                />
            </div>
        </div>
    );
};

export default ExtraMemberSkeleton;
