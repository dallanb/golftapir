import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import ContestList from './ContestList';
import CreateContestButton from './CreateContest/components/CreateContestButton';
import { ContestProps } from './types';
import { ContentLayout } from '../../layouts';
import ContestActions from '../../reducers/ContestReducer';
import { ContestStateInterface } from '../../reducers/types';
import './Contest.scss';

class Contest extends React.PureComponent<ContestProps> {
    componentDidMount() {
        const { fetchContests } = this.props;
        fetchContests({ page: 1, per_page: 100 });
    }

    render() {
        const { data } = this.props;
        return (
            <ContentLayout
                title="Contests"
                subTitle="View Contests"
                showSpinner={!data}
            >
                <CreateContestButton />
                <ContestList />
            </ContentLayout>
        );
    }
}

const mapStateToProps = ({ contest }: ContestStateInterface) => {
    return {
        isFetching: _.get(contest, ['isFetching'], true),
        isSubmitting: _.get(contest, ['isSubmitting'], true),
        data: _.get(contest, ['data'], null),
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchContests(options: { page: number; per_page: number }) {
            return dispatch(ContestActions.fetchContests(options));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contest);
