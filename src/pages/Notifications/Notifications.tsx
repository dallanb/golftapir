import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NotificationsProps } from './types';
import { ContentLayout } from '@layouts';
import { selectData } from './selector';
import NotificationsPageActions from './actions';
import NotificationsSider from './NotificationsSider';
import NotificationsHeader from './NotificationsHeader';
import NotificationsContent from './NotificationsContent';
import './Notifications.less';

const Notifications: React.FunctionComponent<NotificationsProps> = () => {
    const dispatch = useDispatch();
    const { isInitialized } = useSelector(selectData);

    useEffect(() => {
        console.log('YOOO');
        debugger;
        dispatch(NotificationsPageActions.init());
        return () => {
            dispatch(NotificationsPageActions.terminate());
        };
    }, []);

    return (
        <ContentLayout
            header={<NotificationsHeader />}
            sider={<NotificationsSider />}
            content={<NotificationsContent />}
            // showSpinner={!isInitialized}
            className="notifications-view"
        />
    );
};

export default Notifications;
