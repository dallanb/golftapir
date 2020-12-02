import React, { ReactText } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { NotificationsListProps } from './types';
import { List } from '@components';
import NotificationsPageContentNotificationsActions from '../actions';
import {
    selectListData,
    selectListMetadata,
    selectListIsFetching,
} from '../selector';
import NotificationsListTile from './NotificationsListTile';
import { getRefHeight, topicToRouteMapper } from '@utils';
import { NotificationActions } from '@actions';
import './NotificationsList.scss';

const NotificationsList: React.FunctionComponent<NotificationsListProps> = ({
    containerRef,
}) => {
    const history = useHistory();
    const data = useSelector(selectListData);
    const metadata = useSelector(selectListMetadata);
    const isFetching = useSelector(selectListIsFetching);
    const tableDimensions = {
        size: 150,
        width: '100%',
        height: getRefHeight(containerRef, 200) - 32,
    };

    const dispatch = useDispatch();
    const loadMore = (start: number, stop: number) => {
        dispatch(
            NotificationsPageContentNotificationsActions.fetchData(
                {
                    page: Math.floor(stop / 10) + 1,
                    per_page: 10,
                },
                true
            )
        );
    };

    const hasNextPage = () => {
        return (
            metadata && metadata.page * metadata.per_page < metadata.total_count
        );
    };

    const tileOnClick = (item: any) => {
        const { route, state } = topicToRouteMapper(item.topic, item.key, item);
        history.push(route, state);
        dispatch(
            NotificationActions.updateNotification(item._id, { read: true })
        ); // TODO: Should this be moved to a local call?
    };

    return (
        <List
            {...tableDimensions}
            items={data}
            hasNextPage={hasNextPage()}
            loadNextPage={loadMore}
            isNextPageLoading={isFetching}
            minimumBatchSize={10}
            rowRenderer={(props) =>
                NotificationsListTile({ props, onClick: tileOnClick })
            }
        />
    );
};

export default NotificationsList;
