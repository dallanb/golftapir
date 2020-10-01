import React from 'react';
import { connect } from 'react-redux';
import { NotificationsListProps } from './types';
import { StateInterface } from '../types';
import { List } from '@components';
import NotificationActions from '@actions/NotificationActions';
import NotificationsListTile from './NotificationsListTile';
import './NotificationsList.scss';
import { topicToRouteMapper } from '@utils';

class NotificationsList extends React.PureComponent<NotificationsListProps> {
    loadMore = (start: number, stop: number, resolve: () => any) => {
        const { fetchNotifications } = this.props;
        fetchNotifications({ page: Math.floor(stop / 100) + 1, per_page: 100 });
        resolve();
    };

    tileOnClick = (item: any) => {
        const { history, markNotificationAsRead } = this.props;
        history.push(`/app${topicToRouteMapper(item.topic, item.key, item)}`);
        markNotificationAsRead(item._id);
    };

    render() {
        const { metadata, data, isFetching } = this.props;
        return (
            <List
                size={150}
                items={data}
                hasNextPage={
                    metadata.page * metadata.per_page < metadata.total_count
                }
                loadNextPage={this.loadMore}
                isNextPageLoading={isFetching}
                minimumBatchSize={100}
                rowRenderer={(props) =>
                    NotificationsListTile({ props, onClick: this.tileOnClick })
                }
            />
        );
    }
}

const mapStateToProps = ({ notificationsPage }: StateInterface) => {
    const {
        notificationsList: { metadata, data, isFetching },
    } = notificationsPage;
    return {
        metadata,
        data,
        isFetching,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchNotifications(options: any) {
            return dispatch(
                NotificationActions.fetchNotifications(options, true)
            );
        },
        markNotificationAsRead(id: string) {
            return dispatch(
                NotificationActions.updateNotification(id, { read: true })
            );
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(NotificationsList);
