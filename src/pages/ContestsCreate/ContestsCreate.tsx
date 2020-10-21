import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ContestsCreateForm from './ContestsCreateForm';
import { ContestsCreateProps, StateProps } from './types';
import ContestsCreateActions from './actions';
import { ContentLayout } from '@layouts';
import './ContestsCreate.scss';
import constants from '@constants';

class ContestsCreate extends React.PureComponent<ContestsCreateProps> {
    componentDidMount() {
        const {
            init,
            history: {
                location: { state },
            },
        } = this.props;

        init(state);
    }

    componentDidUpdate() {
        const { uuid, isSubmitted, history } = this.props;
        if (isSubmitted && uuid) {
            history.push(`/app${constants.ROUTES.CONTEST}`, {
                uuid,
            });
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
                <ContestsCreateForm />
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
        init(options: any) {
            return dispatch(ContestsCreateActions.init(options));
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
