import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { get as _get } from 'lodash';
import { ContestProps, StateInterface } from './types';
import { ContentLayout } from '@layouts';
import ContestPageActions from './actions';
import ContestParticipantsTable from './ContestParticipantsTable';
import ContestWagersTable from './ContestWagersTable';
import './Contest.scss';
import { Typography } from 'antd';

class Contest extends React.PureComponent<ContestProps> {
    componentDidMount() {
        const {
            match: { params },
            init,
        } = this.props;
        const uuid = _get(params, ['uuid'], null);
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
                <Typography.Title level={5}>Participants</Typography.Title>
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
