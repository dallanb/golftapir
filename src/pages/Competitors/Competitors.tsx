import React from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { ContentLayout } from '@layouts';
import { CompetitorsProps, StateInterface } from './types';
import CompetitorsPageActions from './actions';
import './Competitors.scss';

class Competitors extends React.PureComponent<CompetitorsProps> {
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
                <div className="competitors-page-view">
                    <div className="competitors-page-user"></div>
                </div>
            </ContentLayout>
        );
    }
}

const mapStateToProps = ({ base, competitorsPage }: StateInterface) => {
    const { me } = base;
    const { title, description, isInitialized } = competitorsPage;

    return {
        title,
        description,
        isInitialized,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        init() {
            return dispatch(CompetitorsPageActions.init());
        },
        terminate() {
            return dispatch(CompetitorsPageActions.terminate());
        },
    };
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Competitors);
