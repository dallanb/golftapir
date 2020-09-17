import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import { ContestProps, StateInterface } from './types';
import { ContentLayout } from '@layouts';
import ContestPageActions from './actions';
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

    componentWillUnmount() {
        const { terminate } = this.props;
        terminate();
    }

    render() {
        const { title, description, isInitialized } = this.props;
        return (
            <ContentLayout
                title={title}
                subTitle={description}
                showSpinner={!isInitialized}
            >
                <ContestParticipantsTable />
            </ContentLayout>
        );
    }
}

const mapStateToProps = ({ contestPage }: StateInterface) => {
    const { title, description, isInitialized } = contestPage;
    return {
        title,
        description,
        isInitialized,
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
    };
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Contest);
