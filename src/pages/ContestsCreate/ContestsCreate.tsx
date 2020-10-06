import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CreateContestForm from './ContestsCreateForm';
import { ContestsCreateProps, StateProps } from './types';
import ContestsCreateActions from './actions';
import { ContentLayout } from '@layouts';
import './ContestsCreate.scss';

class ContestsCreate extends React.PureComponent<ContestsCreateProps> {
    componentDidMount() {
        const { init } = this.props;
        init();
    }

    componentDidUpdate() {
        const { uuid, isSubmitted, history } = this.props;
        if (isSubmitted && uuid) {
            history.push(`/app/contests/${uuid}`);
        }
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
                <CreateContestForm />
            </ContentLayout>
        );
    }
}

const mapStateToProps = ({ contestsCreatePage }: StateProps) => {
    const {
        title,
        description,
        isInitialized,
        isSubmitted,
        uuid,
    } = contestsCreatePage;
    return {
        title,
        description,
        isInitialized,
        isSubmitted,
        uuid,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        init() {
            return dispatch(ContestsCreateActions.init());
        },
        terminate() {
            return dispatch(ContestsCreateActions.terminate());
        },
    };
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(ContestsCreate);
