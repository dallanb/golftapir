import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NotificationsList from './NotificationsList';
import { NotificationsProps } from './types';
import NotificationsPageContentNotificationsActions from './actions';
import { selectData } from './selector';
import ComponentContent from '@layouts/ComponentContent';
import './Notifications.scss';

const Notifications: React.FunctionComponent<NotificationsProps> = ({}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(NotificationsPageContentNotificationsActions.init());
        return () => {
            dispatch(NotificationsPageContentNotificationsActions.terminate());
        };
    }, []);

    const { isInitialized } = useSelector(selectData);

    return (
        <ComponentContent showSpinner={!isInitialized} className="contests">
            <NotificationsList />
        </ComponentContent>
    );
};

export default Notifications;
