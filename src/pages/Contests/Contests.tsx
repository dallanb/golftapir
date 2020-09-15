import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import ContestsList from './ContestsList';
import ContestsCreateButton from '../ContestsCreate/ContestsCreateButton';
import { ContestsProps } from './types';
import { ContentLayout } from '@layouts';
import ContestActions, {
    ContestInterface,
} from '@reducers/data/ContestReducer';
import { ContestPageInterface } from '@reducers/ui/ContestPageReducer';
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

const mapStateToProps = ({
    contestPage,
}: {
    contestPage: { ui: ContestPageInterface; data: ContestInterface };
}) => {
    return {
        isFetching: _.get(contestPage, ['data', 'isFetching'], true),
        isSubmitting: _.get(contestPage, ['data', 'isSubmitting'], true),
        data: _.get(contestPage, ['data', 'data'], null),
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchContests(options: { page: number; per_page: number }) {
            return dispatch(ContestActions.fetchContests(options));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contests);
