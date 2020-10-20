import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ContestUpdateForm from './ContestUpdateForm';
import { ContestUpdateProps, ContestUpdateState, StateProps } from './types';
import ContestUpdateActions from './actions';
import { ContentLayout } from '@layouts';
import './ContestUpdate.scss';
import { get as _get } from 'lodash';
import constants from '@constants';

class ContestUpdate extends React.PureComponent<
    ContestUpdateProps,
    ContestUpdateState
> {
    constructor(props: ContestUpdateProps) {
        super(props);
        this.state = {
            contest: _get(
                props,
                ['history', 'location', 'state', 'contest'],
                null
            ),
        };
    }

    componentDidMount() {
        const { init } = this.props;
        const { contest } = this.state;
        init(contest);
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
        const {
            contest: { uuid },
        } = this.state;
        return (
            <ContentLayout
                title={title}
                subTitle={description}
                showSpinner={!isInitialized}
            >
                <ContestUpdateForm uuid={uuid} />
            </ContentLayout>
        );
    }
}

const mapStateToProps = ({ contestUpdatePage }: StateProps) => {
    const {
        title,
        description,
        isInitialized,
        isSubmitted,
        uuid,
    } = contestUpdatePage;
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
        init(contest: string) {
            return dispatch(ContestUpdateActions.init(contest));
        },
        terminate() {
            return dispatch(ContestUpdateActions.terminate());
        },
    };
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(ContestUpdate);
