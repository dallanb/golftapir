import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { ContestProps } from './types';
import { ContentLayout } from '../../layouts';
import ContestActions from '../../reducers/ContestReducer';
import { ContestStateInterface } from '../../reducers/types';
import './Contest.scss';

class Contest extends React.PureComponent<ContestProps> {
    componentDidMount() {
        const { fetchMyContests } = this.props;
        fetchMyContests();
    }

    render() {
        const { isFetching, isSubmitting, data } = this.props;
        return (
            <ContentLayout
                title="Contest"
                subTitle="Update Contest Settings"
                showSpinner={isFetching || isSubmitting || !data}
            >
                YO
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
        fetchMyContests() {
            return dispatch(ContestActions.fetchContests('me'));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contest);
