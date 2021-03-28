import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NotificationsProps } from './types';
import { AppLayoutContent } from '@layouts/AppLayout';
import { selectData } from './selector';
import NotificationsPageActions from './actions';
import NotificationsSider from './NotificationsSider';
import NotificationsContent from './NotificationsContent';
import './Notifications.less';

const Notifications: React.FunctionComponent<NotificationsProps> = () => {
    const dispatch = useDispatch();
    const { isInitialized } = useSelector(selectData);

    useEffect(() => {
        dispatch(NotificationsPageActions.init());
        return () => {
            dispatch(NotificationsPageActions.terminate());
        };
    }, []);

    return (
        <AppLayoutContent
            sider={<NotificationsSider />}
            content={<NotificationsContent />}
            className="notifications-view"
        />
    );
};

export default Notifications;
