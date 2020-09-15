import React from 'react';
import { connect } from 'react-redux';
import ContestsList from './ContestsList';
import ContestsCreateButton from '../ContestsCreate/ContestsCreateButton';
import { ContestsProps, StateInterface } from './types';
import { ContentLayout } from '@layouts';
import { withTarget } from '@utils';
import constants from '@constants';
import ContestActions from '@reducers/data/ContestReducer';
import './Contests.scss';

class Contests extends React.PureComponent<ContestsProps> {
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
                <ContestsCreateButton />
                <ContestsList />
            </ContentLayout>
        );
    }
}

const mapStateToProps = ({ contestsPage }: StateInterface) => {
    const {
        data: { contest },
    } = contestsPage;
    return {
        isFetching: contest.isFetching,
        isSubmitting: contest.isSubmitting,
        data: contest.data,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchContests(options: { page: number; per_page: number }) {
            return dispatch(
                withTarget(
                    ContestActions.fetchContests,
                    constants.TARGETS.CONTESTS_PAGE
                )(options)
            );
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contests);
