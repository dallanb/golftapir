import React, { useContext, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get as _get } from 'lodash';
import NotificationsList from './NotificationsList';
import { NotificationsProps } from './types';
import NotificationsPageContentNotificationsActions from './actions';
import { selectData } from './selector';
import ComponentContent from '@layouts/ComponentContent';
import CONSTANTS from '@locale/en-CA';
import { ResizeContext } from '@contexts';
import './Notifications.less';

const Notifications: React.FunctionComponent<NotificationsProps> = ({}) => {
    const dispatch = useDispatch();
    const ref = useRef(null);
    const dimensions = useContext(ResizeContext);
    console.log(_get(dimensions, ['height']));

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

    return (
        <ComponentContent
            componentRef={ref}
            showSpinner={!isInitialized}
            className="notifications"
            title={CONSTANTS.PAGES.NOTIFICATIONS.LIST.TITLE}
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
