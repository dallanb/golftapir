import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { get as _get } from 'lodash';
import { Typography } from 'antd';
import { ContestProps, ContestState, StateInterface } from './types';
import { ContentLayout } from '@layouts';
import { ContestActions as ContestReduxActions } from '@actions';
import ContestPageActions from './actions';
import ContestParticipantsTable from './ContestParticipantsTable';
import ContestStatus from './ContestStatus';
import ContestActions from './ContestActions';
import './Contest.scss';
import constants from '@constants';

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
        const { onActivate } = this.props;
        const { uuid } = this.state;
        return [
            {
                key: constants.ACTION.ACTIVATE.KEY,
                onClick: () =>
                    onActivate(uuid, { status: constants.STATUS.READY.KEY }),
            },
        ];
    };

    render() {
        const {
            title,
            description,
            status,
            isInitialized,
            isOwner,
            contestParticipants,
        } = this.props;
        return (
            <ContentLayout
                title={title}
                subTitle={description}
                showSpinner={!isInitialized}
                className="contest-view"
            >
                <ContestStatus status={status} />
                <ContestActions
                    isOwner={isOwner}
                    participants={contestParticipants}
                    status={status}
                    actions={this.generateActions()}
                />
                <Typography.Title level={5}>Participants</Typography.Title>
                <ContestParticipantsTable />
            </ContentLayout>
        );
    }
}

const mapStateToProps = ({ base, contestPage }: StateInterface) => {
    const {
        title,
        description,
        isInitialized,
        status,
        contestParticipants,
        owner_uuid,
    } = contestPage;
    const { me } = base;

    const isOwner = me.membership_uuid === owner_uuid;

    return {
        title,
        description,
        isInitialized,
        status,
        contestParticipants,
        isOwner,
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
        onActivate(uuid: string, data: { status: string }) {
            return dispatch(ContestReduxActions.updateContest(uuid, data));
        },
    };
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Contest);
