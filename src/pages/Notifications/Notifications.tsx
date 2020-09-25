import React from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import NotificationsList from './NotificationsList';
import { NotificationsProps, StateInterface } from './types';
import NotificationsPageActions from './actions';
import { ContentLayout } from '@layouts';
import './Notifications.scss';

class Notifications extends React.PureComponent<NotificationsProps> {
    componentDidMount() {
        const { init } = this.props;
        init();
    }

    componentWillUnmount() {
        const { terminate } = this.props;
        terminate();
    }

    render() {
        const { title, description, isInitialized, history } = this.props;
        return (
            <ContentLayout
                title={title}
                subTitle={description}
                showSpinner={!isInitialized}
            >
                <NotificationsList history={history} />
            </ContentLayout>
        );
    }
}

const mapStateToProps = ({ notificationsPage }: StateInterface) => {
    const { isInitialized, title, description } = notificationsPage;
    return {
        isInitialized,
        title,
        description,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        init() {
            return dispatch(NotificationsPageActions.init());
        },
        terminate() {
            return dispatch(NotificationsPageActions.terminate());
        },
    };
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Notifications);
