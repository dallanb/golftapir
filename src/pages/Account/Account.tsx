import React from 'react';
import { connect } from 'react-redux';
import { AccountProps, StateInterface } from './types';
import { ContentLayout } from '@layouts';
import constants from '@constants';
import { withTarget } from '@utils';
import AccountForm from './AccountForm';
import AccountActions from '@reducers/AccountReducer';
import './Account.scss';

class Account extends React.PureComponent<AccountProps> {
    componentDidMount() {
        const { fetchAccount } = this.props;
        fetchAccount();
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

const mapStateToProps = ({ accountPage }: StateInterface) => {
    const account = accountPage.data.account;
    return {
        isFetching: account.isFetching,
        isSubmitting: account.isSubmitting,
        data: account.data,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchAccount() {
            return dispatch(
                withTarget(
                    AccountActions.fetchAccount,
                    constants.TARGETS.ACCOUNT_PAGE
                )('me')
            );
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);
