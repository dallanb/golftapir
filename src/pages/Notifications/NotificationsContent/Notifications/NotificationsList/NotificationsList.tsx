import React, { ReactText } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { NotificationsListProps } from './types';
import { FixedSizeList } from '@components';
import NotificationsPageContentNotificationsActions from '../actions';
import NotificationsListTile from './NotificationsListTile';
import {
    getRefHeight,
    navigate,
    topicToRouteMapper,
    withAppRoute,
} from '@utils';
import { NotificationActions } from '@actions';
import { selectLeagues } from '@selectors/BaseSelector';
import './NotificationsList.less';
import { filterLeaguesByNotification } from '@pages/Notifications/NotificationsContent/Notifications/utils';
import CONSTANTS from '@locale/en-CA';

const NotificationsList: React.FunctionComponent<NotificationsListProps> = ({
    containerRef,
    data,
    metadata,
    options,
    isFetching,
}) => {
    const history = useHistory();
    const leagues = useSelector(selectLeagues);
    const tableDimensions = {
        size: 100,
        width: '100%',
        height: getRefHeight(containerRef, 200),
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
        if (item) {
            const memberLeague = filterLeaguesByNotification(item, leagues);
            const { route, state } = topicToRouteMapper(
                item.topic,
                item.key,
                item
            );
            state.league = memberLeague?.league;
            state.member = memberLeague?.member;
            navigate(history, route, state);
            dispatch(
                NotificationActions.updateNotification(item._id, { read: true })
            );
        }
    };

    const actions = {
        markAsRead: (_id: string) =>
            dispatch(
                NotificationsPageContentNotificationsActions.markNotificationAsRead(
                    _id
                )
            ),
        markAsUnread: (_id: string) =>
            dispatch(
                NotificationsPageContentNotificationsActions.markNotificationAsUnread(
                    _id
                )
            ),
        markAsArchived: (_id: string) =>
            dispatch(
                NotificationsPageContentNotificationsActions.markNotificationAsArchived(
                    _id
                )
            ),
    };

    return (
        <FixedSizeList
            {...tableDimensions}
            items={data}
            hasNextPage={hasNextPage()}
            loadNextPage={loadMore}
            isNextPageLoading={isFetching}
            minimumBatchSize={10}
            rowRenderer={(props) =>
                NotificationsListTile({ props, onClick: tileOnClick, actions })
            }
            emptyDescription={CONSTANTS.PAGES.NOTIFICATIONS.LIST.EMPTY}
        />
    );
};

export default NotificationsList;
