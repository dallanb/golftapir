import React from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ContestsList from './ContestsList';
import ContestsCreateButton from '../ContestsCreate/ContestsCreateButton';
import { ContestsProps, StateInterface } from './types';
import ContestsPageActions from './actions';
import { ContentLayout } from '@layouts';
import './Contests.scss';

class Contests extends React.PureComponent<ContestsProps> {
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
                <ContestsCreateButton />
                <ContestsList history={history} />
            </ContentLayout>
        );
    }
}

const mapStateToProps = ({ contestsPage }: StateInterface) => {
    const { isInitialized, title, description } = contestsPage;
    return {
        isInitialized,
        title,
        description,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        init() {
            return dispatch(ContestsPageActions.init());
        },
        terminate() {
            return dispatch(ContestsPageActions.terminate());
        },
    };
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Contests);
