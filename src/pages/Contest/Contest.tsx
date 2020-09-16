import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import { ContestProps, StateInterface } from './types';
import { ContentLayout } from '@layouts';
import ContestPageActions from './reducer';
import ViewContestParticipantsTable from './ContestParticipantsTable';
import './Contest.scss';

class Contest extends React.PureComponent<ContestProps> {
    componentDidMount() {
        const {
            match: { params },
            init,
        } = this.props;
        const uuid = _.get(params, ['uuid'], null);
        init(uuid);
    }

    render() {
        const { data, isFetching, init } = this.props;
        return (
            <ContentLayout
                title={_.get(data, ['name'], '')}
                subTitle="Contests Info"
                showSpinner={!data}
            >
                <ViewContestParticipantsTable
                    data={data}
                    fetchContestParticipants={init}
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
        init(uuid: string) {
            return dispatch(ContestPageActions.init(uuid));
        },
    };
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Contest);
