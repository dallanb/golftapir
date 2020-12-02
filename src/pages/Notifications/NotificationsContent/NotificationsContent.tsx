import React from 'react';
import { useSelector } from 'react-redux';
import { ContentLayoutContent } from '@layouts';
import Notifications from './Notifications';
import { NotificationsContentProps } from './types';
import { selectData } from '../selector';

const NotificationsContent: React.FunctionComponent<NotificationsContentProps> = ({}) => {
    const { isInitialized } = useSelector(selectData);
    return (
        <ContentLayoutContent showSpinner={!isInitialized}>
            <Notifications />
        </ContentLayoutContent>
    );
};

export default NotificationsContent;
