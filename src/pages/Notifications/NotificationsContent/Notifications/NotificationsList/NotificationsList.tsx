import React, { ReactText } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { NotificationsListProps } from './types';
import { List } from '@components';
import NotificationsPageContentNotificationsActions from '../actions';
import { selectData } from '../selector';
import NotificationsListTile from './NotificationsListTile';
import { topicToRouteMapper } from '@utils';
import { NotificationActions } from '@actions';
import './NotificationsList.scss';

const NotificationsList: React.FunctionComponent<NotificationsListProps> = ({}) => {
    const history = useHistory();
    const { data, metadata, isFetching } = useSelector(selectData);

    const dispatch = useDispatch();
    const loadMore = (start: number, stop: number, resolve: () => any) => {
        dispatch(
            NotificationsPageContentNotificationsActions.fetchData(
                {
                    page: Math.floor(stop / 10) + 1,
                    per_page: 10,
                },
                true
            )
        );
        resolve();
    };

    const hasNextPage = () => {
        return (
            metadata && metadata.page * metadata.per_page < metadata.total_count
        );
    };

    const loadTableDimensions = (
        items: any[] = []
    ): { size: number; height: ReactText; width: ReactText } => {
        // move this info to schema.tsx
        const size = 150;
        const width = '100%';
        const height = items.length * size;

        return { size, width, height };
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
            {...loadTableDimensions(data)}
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
