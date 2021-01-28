import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NotificationsList from './NotificationsList';
import { NotificationsProps } from './types';
import NotificationsPageContentNotificationsActions from './actions';
import { selectData } from './selector';
import ComponentContent from '@layouts/ComponentContent';
import './Notifications.less';
import MembersList from '@pages/Members/MembersContent/Members/MembersList';

const Notifications: React.FunctionComponent<NotificationsProps> = ({}) => {
    const dispatch = useDispatch();
    const ref = useRef(null);

    useEffect(() => {
        dispatch(NotificationsPageContentNotificationsActions.init());
        return () => {
            dispatch(NotificationsPageContentNotificationsActions.terminate());
        };
    }, []);

    const {
        isInitialized,
        isFetching,
        data = [],
        metadata = [],
        options = undefined,
    } = useSelector(selectData);

    const dimensions = {
        height: Math.max(200, data.length * 75),
    };

    return (
        <ComponentContent
            componentRef={ref}
            showSpinner={!isInitialized}
            className="notifications"
            style={dimensions}
            title={'Notifications List'}
        >
            <NotificationsList
                containerRef={ref}
                data={data}
                metadata={metadata}
                options={options}
                isFetching={isFetching}
            />
        </ComponentContent>
    );
};

export default Notifications;
