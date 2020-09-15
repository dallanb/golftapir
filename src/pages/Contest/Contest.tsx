import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import { ContestProps, StateInterface } from './types';
import { ContentLayout } from '@layouts';
import { withTarget } from '@utils';
import constants from '@constants';
import ContestActions from '@reducers/data/ContestReducer';
import ViewContestParticipantsTable from './ContestParticipantsTable';
import './Contest.scss';

class Contests extends React.PureComponent<ContestProps> {
    componentDidMount() {
        const {
            match: { params },
            fetchContestParticipants,
        } = this.props;
        const uuid = _.get(params, ['uuid'], null);
        fetchContestParticipants(uuid);
    }

    render() {
        const { data, isFetching, fetchContestParticipants } = this.props;
        return (
            <ContentLayout
                title={_.get(data, ['name'], '')}
                subTitle="Contests Info"
                showSpinner={!data}
            >
                <ViewContestParticipantsTable
                    data={data}
                    fetchContestParticipants={fetchContestParticipants}
                    isFetching={isFetching}
                />
            </ContentLayout>
        );
    }
}

const mapStateToProps = ({ contestPage }: StateInterface) => {
    const {
        data: { contest },
    } = contestPage;
    return {
        data: contest.data,
        isFetching: contest.isFetching,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchContestParticipants(uuid: string) {
            dispatch(
                withTarget(
                    ContestActions.fetchContestParticipants,
                    constants.TARGETS.CONTEST_PAGE
                )(uuid)
            );
        },
    };
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Contests);
