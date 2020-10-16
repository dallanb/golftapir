import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { get as _get } from 'lodash';
import { ContestProps, ContestState, StateInterface } from './types';
import { ContentLayout } from '@layouts';
import constants from '@constants';
import ContestPageActions from './actions';
import ContestParticipantsTable from './ContestParticipantsTable';
import ContestStatus from './ContestStatus';
import ContestActions from './ContestActions';
import ContestSubscription from './ContestSubscription';
import ContestAvatar from './ContestAvatar';
import ContestStartTime from './ContestStartTime';
import './Contest.scss';

class Contest extends React.PureComponent<ContestProps, ContestState> {
    constructor(props: ContestProps) {
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
        const { activateContest, readyContest, history } = this.props;
        const { uuid } = this.state;
        return [
            {
                key: constants.ACTION.UPDATE.KEY,
                onClick: () => history.push(`/app/contests/${uuid}/update`),
            },
            {
                key: constants.ACTION.READY.KEY,
                onClick: () => readyContest(uuid),
            },
            {
                key: constants.ACTION.ACTIVATE.KEY,
                onClick: () => activateContest(uuid),
            },
        ];
    };

    render() {
        const { title, description, isInitialized } = this.props;
        const { uuid } = this.state;
        return (
            <ContentLayout
                title={title}
                subTitle={description}
                showSpinner={!isInitialized}
                className="contest-view"
            >
                <ContestAvatar />
                <ContestSubscription uuid={uuid} />
                <ContestStatus />
                <ContestStartTime />
                <ContestActions actions={this.generateActions()} />
                <ContestParticipantsTable />
            </ContentLayout>
        );
    }
}

const mapStateToProps = ({ contestPage }: StateInterface) => {
    const { title, description, isInitialized } = contestPage;

    return {
        title,
        description,
        isInitialized,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        init(uuid: string) {
            return dispatch(ContestPageActions.init(uuid));
        },
        terminate() {
            return dispatch(ContestPageActions.terminate());
        },
        readyContest(uuid: string) {
            return dispatch(
                ContestPageActions.updateContestStatus(
                    uuid,
                    constants.STATUS.READY.KEY
                )
            );
        },
        activateContest(uuid: string) {
            return dispatch(
                ContestPageActions.updateContestStatus(
                    uuid,
                    constants.STATUS.ACTIVE.KEY
                )
            );
        },
    };
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Contest);
