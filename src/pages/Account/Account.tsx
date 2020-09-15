import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { AccountProps } from './types';
import { ContentLayout } from '@layouts';
import AccountForm from './AccountForm';
import AccountActions, {
    AccountInterface,
} from '@reducers/data/AccountReducer';
import './Account.scss';
import { AccountPageInterface } from '@reducers/ui/AccountPageReducer';

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

const mapStateToProps = ({
    accountPage,
}: {
    accountPage: AccountPageInterface;
}) => {
    return {
        isFetching: _.get(accountPage, ['isFetching'], true),
        isSubmitting: _.get(accountPage, ['isSubmitting'], true),
        data: _.get(accountPage, ['data'], null),
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
