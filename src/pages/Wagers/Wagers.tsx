import React from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import WagersList from './WagersList';
import { WagersProps, StateInterface } from './types';
import WagersPageActions from './actions';
import { ContentLayout } from '@layouts';
import './Wagers.scss';

class Wagers extends React.PureComponent<WagersProps> {
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
                <WagersList history={history} />
            </ContentLayout>
        );
    }
}

const mapStateToProps = ({ wagersPage }: StateInterface) => {
    const { isInitialized, title, description } = wagersPage;
    return {
        isInitialized,
        title,
        description,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        init() {
            return dispatch(WagersPageActions.init());
        },
        terminate() {
            return dispatch(WagersPageActions.terminate());
        },
    };
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Wagers);
