import React from 'react';
import { connect } from 'react-redux';
import { AccountProps, StateInterface } from './types';
import { ContentLayout } from '@layouts';
import AccountForm from './AccountForm';
import AccountPageActions from './actions';
import './Account.scss';

class Account extends React.PureComponent<AccountProps> {
    componentDidMount() {
        const { init } = this.props;
        init();
    }

    componentWillUnmount() {
        const { terminate } = this.props;
        terminate();
    }

    render() {
        const { title, description, isInitialized } = this.props;

        return (
            <ContentLayout
                title={title}
                subTitle={description}
                showSpinner={!isInitialized}
            >
                <AccountForm />
            </ContentLayout>
        );
    }
}

const mapStateToProps = ({ accountPage }: StateInterface) => {
    const { title, description, isInitialized } = accountPage;
    return {
        title,
        description,
        isInitialized,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        init() {
            return dispatch(AccountPageActions.init());
        },
        terminate() {
            return dispatch(AccountPageActions.terminate());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);
