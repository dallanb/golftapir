import React from 'react';
import { connect } from 'react-redux';
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
    const { title, description, isInitialized } = contestsCreatePage;
    return {
        title,
        description,
        isInitialized,
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

export default connect(mapStateToProps, mapDispatchToProps)(ContestsCreate);
