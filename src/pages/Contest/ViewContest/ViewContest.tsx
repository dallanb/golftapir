import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import { ViewContestProps } from './types';
import { ContentLayout } from '@layouts';
import ContestActions from '@reducers/ContestReducer';
import ViewContestParticipantsTable from './components/ViewContestParticipantsTable';
import './ViewContest.scss';

class ViewContest extends React.PureComponent<ViewContestProps> {
    componentDidMount() {
        const {
            match: { params },
            fetchContest,
        } = this.props;
        const uuid = _.get(params, ['uuid'], null);
        console.log(uuid);
        fetchContest(uuid);
    }

    render() {
        const { data } = this.props;
        return (
            <ContentLayout
                title={_.get(data, ['name'], '')}
                subTitle="Contest Info"
                showSpinner={!data}
            >
                <ViewContestParticipantsTable />
            </ContentLayout>
        );
    }
}

const mapStateToProps = ({ contest }: any) => {
    return {
        data: _.get(contest, ['data']),
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchContest(uuid: string) {
            dispatch(ContestActions.fetchContest(uuid));
        },
    };
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(ViewContest);
