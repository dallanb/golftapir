import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { AccountProps } from './types';
import { ContentLayout } from '../../layouts';
import AccountActions from '../../reducers/AccountReducer';
import './Account.scss';

class Account extends React.PureComponent<AccountProps> {
    componentDidMount() {
        const { fetchMyAccount } = this.props;
        fetchMyAccount();
    }

    render() {
        return (
            <ContentLayout title="Account" subTitle="Update Account Settings">
                <div>THE GOOD SHIT</div>
            </ContentLayout>
        );
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchMyAccount() {
            return dispatch(AccountActions.fetchAccount('me'));
        },
    };
};

export default connect(null, mapDispatchToProps)(Account);
