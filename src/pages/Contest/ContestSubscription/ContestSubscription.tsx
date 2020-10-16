import React from 'react';
import { connect } from 'react-redux';
import { BellTwoTone } from '@ant-design/icons';
import { SubscriptionToggle } from '@components';
import { ContestSubscriptionProps } from './types';
import { StateInterface } from '../types';
import { NotificationActions } from '@actions';
import './ContestSubscription.scss';

class ContestSubscription extends React.PureComponent<
    ContestSubscriptionProps
> {
    render() {
        const { subscribed, uuid, subscribe, unsubscribe } = this.props;
        return (
            <div className="contest-subscription">
                <SubscriptionToggle
                    checked={subscribed}
                    icon={
                        <BellTwoTone
                            twoToneColor={subscribed ? 'red' : 'green'}
                        />
                    }
                    onClick={() =>
                        subscribed ? unsubscribe(uuid) : subscribe(uuid)
                    }
                    className="subscription-toggle"
                />
            </div>
        );
    }
}

const mapStateToProps = ({ contestPage }: StateInterface) => {
    const { subscribed } = contestPage;
    return {
        subscribed,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        subscribe(uuid: string) {
            dispatch(NotificationActions.subscribe({ uuid }));
        },
        unsubscribe(uuid: string) {
            dispatch(NotificationActions.unsubscribe({ uuid }));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContestSubscription);
