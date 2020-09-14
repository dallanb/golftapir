import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import { ContestProps } from './types';
import { ContentLayout } from '@layouts';
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
        console.log(uuid);
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

const mapStateToProps = ({ contest }: any) => {
    return {
        data: _.get(contest, ['data']),
        isFetching: _.get(contest, ['isFetching']),
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchContestParticipants(uuid: string) {
            dispatch(ContestActions.fetchContestParticipants(uuid));
        },
    };
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Contests);
