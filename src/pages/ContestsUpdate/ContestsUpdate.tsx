import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ContestsUpdateForm from './ContestsUpdateForm';
import { ContestsUpdateProps, ContestUpdateState, StateProps } from './types';
import ContestsUpdateActions from './actions';
import { ContentLayout } from '@layouts';
import './ContestsUpdate.scss';
import { get as _get } from 'lodash';

class ContestsUpdate extends React.PureComponent<
    ContestsUpdateProps,
    ContestUpdateState
> {
    constructor(props: ContestsUpdateProps) {
        super(props);
        this.state = { uuid: _get(props, ['match', 'params', 'uuid'], null) };
    }

    componentDidMount() {
        const { init } = this.props;
        const { uuid } = this.state;
        init(uuid);
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
        const { uuid } = this.state;
        return (
            <ContentLayout
                title={title}
                subTitle={description}
                showSpinner={!isInitialized}
            >
                <ContestsUpdateForm uuid={uuid} />
            </ContentLayout>
        );
    }
}

const mapStateToProps = ({ contestsUpdatePage }: StateProps) => {
    const {
        title,
        description,
        isInitialized,
        isSubmitted,
        uuid,
    } = contestsUpdatePage;
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
        init(uuid: string) {
            return dispatch(ContestsUpdateActions.init(uuid));
        },
        terminate() {
            return dispatch(ContestsUpdateActions.terminate());
        },
    };
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(ContestsUpdate);
