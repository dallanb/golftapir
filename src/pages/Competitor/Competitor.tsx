import React from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { get as _get } from 'lodash';
import { ContentLayout } from '@layouts';
import constants from '@constants';
import { CompetitorProps, CompetitorState, StateInterface } from './types';
import CompetitorPageActions from './actions';
import CompetitorPlate from './CompetitorPlate';
import CompetitorActions from './CompetitorActions';
import './Competitor.scss';

class Competitor extends React.PureComponent<CompetitorProps, CompetitorState> {
    constructor(props: CompetitorProps) {
        super(props);
        this.state = { uuid: _get(props, ['match', 'params', 'uuid'], null) };
    }

    componentDidMount() {
        const { init } = this.props;
        const { uuid } = this.state;
        init(uuid);
    }

    componentWillUnmount() {
        const { terminate } = this.props;
        terminate();
    }

    generateActions = () => {
        const { history } = this.props;
        const { uuid } = this.state;
        return [
            {
                key: constants.ACTION.CHALLENGE.KEY,
                onClick: () =>
                    history.push(`/app/contests/create`, {
                        participant_uuid: uuid,
                    }),
            },
        ];
    };

    render() {
        const { title, description, isInitialized } = this.props;
        return (
            <ContentLayout
                title={title}
                subTitle={description}
                showSpinner={!isInitialized}
            >
                <div className="competitor-page-view">
                    <CompetitorPlate />
                    <CompetitorActions actions={this.generateActions()} />
                </div>
            </ContentLayout>
        );
    }
}

const mapStateToProps = ({ competitorPage }: StateInterface) => {
    const { title, description, isInitialized } = competitorPage;

    return {
        title,
        description,
        isInitialized,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        init(uuid: string) {
            return dispatch(CompetitorPageActions.init(uuid));
        },
        terminate() {
            return dispatch(CompetitorPageActions.terminate());
        },
    };
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Competitor);
