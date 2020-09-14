import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { AccountProps } from './types';
import { ContentLayout } from '@layouts';
import AccountForm from './AccountForm';
import AccountActions from '@reducers/AccountReducer';
import { AccountStateInterface } from '@reducers/types';
import './Account.scss';

class Account extends React.PureComponent<AccountProps> {
    componentDidMount() {
        const { fetchMyAccount } = this.props;
        fetchMyAccount();
    }

    render() {
        const { isFetching, isSubmitting, data } = this.props;
        return (
            <ContentLayout
                title="Account"
                subTitle="Update Account Settings"
                showSpinner={isFetching || isSubmitting || !data}
            >
                <AccountForm />
            </ContentLayout>
        );
    }
}

const mapStateToProps = ({ account }: AccountStateInterface) => {
    return {
        isFetching: _.get(account, ['isFetching'], true),
        isSubmitting: _.get(account, ['isSubmitting'], true),
        data: _.get(account, ['data'], null),
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchMyAccount() {
            return dispatch(AccountActions.fetchAccount('me'));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);
