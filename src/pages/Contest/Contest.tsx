import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import { ContestProps, StateInterface } from './types';
import { ContentLayout } from '@layouts';
import ContestPageActions from './reducer';
import ContestParticipantsTable from './ContestParticipantsTable';
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
        const { data, isInitialized } = this.props;
        console.log(data);
        return (
            <ContentLayout
                title={_.get(data, ['name'], '')}
                subTitle="Contests Info"
                showSpinner={!isInitialized}
            >
                <ContestParticipantsTable />
            </ContentLayout>
        );
    }
}

const mapStateToProps = ({ contestPage }: StateInterface) => {
    const {
        data: { contest },
        ui,
    } = contestPage;
    return {
        data: contest.data,
        isInitialized: ui.isInitialized,
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
