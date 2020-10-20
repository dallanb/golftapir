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
        const {
            contest: { uuid },
        } = this.state;
        init(uuid);
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
            />
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
        init(uuid: string) {
            return dispatch(ContestMatchupPageActions.init(uuid));
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
