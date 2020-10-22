import React from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { get as _get } from 'lodash';
import { ContentLayout } from '@layouts';
import {
    ContestMatchupProps,
    ContestMatchupState,
    StateInterface,
} from './types';
import ContestMatchupPageActions from './actions';
import ContestMatchupScorecard from './ContestMatchupScorecard';
import './ContestMatchup.scss';

class ContestMatchup extends React.PureComponent<
    ContestMatchupProps,
    ContestMatchupState
> {
    constructor(props: ContestMatchupProps) {
        super(props);
        this.state = {
            contest: _get(
                props,
                ['history', 'location', 'state', 'contest'],
                null
            ),
        };
    }

    componentDidMount() {
        const { init } = this.props;
        const { contest } = this.state;
        init(contest);
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
                <ContestMatchupScorecard />
            </ContentLayout>
        );
    }
}

const mapStateToProps = ({ contestMatchupPage }: StateInterface) => {
    const { title, description, isInitialized } = contestMatchupPage;
    return {
        title,
        description,
        isInitialized,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        init(contest: any) {
            return dispatch(ContestMatchupPageActions.init(contest));
        },
        terminate() {
            return dispatch(ContestMatchupPageActions.terminate());
        },
    };
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(ContestMatchup);
