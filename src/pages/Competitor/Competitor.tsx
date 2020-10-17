import React from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { get as _get } from 'lodash';
import { ContentLayout } from '@layouts';
import { CompetitorProps, CompetitorState, StateInterface } from './types';
import CompetitorPageActions from './actions';
import './Competitor.scss';
import { Avatar } from '@components';
import { withS3URL } from '@utils';
import { Typography } from 'antd';

class Competitor extends React.PureComponent<CompetitorProps, CompetitorState> {
    constructor(props: CompetitorProps) {
        super(props);
        this.state = { uuid: _get(props, ['match', 'params', 'uuid'], null) };
    }

    componentDidMount() {
        const { init } = this.props;
        const { uuid } = this.state;
        init(uuid);
    }

    componentWillUnmount() {
        const { terminate } = this.props;
        terminate();
    }

    render() {
        const {
            title,
            description,
            isInitialized,
            name,
            s3_filename,
        } = this.props;
        return (
            <ContentLayout
                title={title}
                subTitle={description}
                showSpinner={!isInitialized}
            >
                <div className="competitor-page-view">
                    <div className="competitor-page-user">
                        <Avatar
                            src={s3_filename && withS3URL(s3_filename)}
                            name={name}
                            size={96}
                        />
                        <div className="home-page-user-info">
                            <div className="home-page-user-name">
                                <Typography.Title level={2}>
                                    {name}
                                </Typography.Title>
                            </div>
                            <div>placeholder</div>
                        </div>
                    </div>
                </div>
            </ContentLayout>
        );
    }
}

const mapStateToProps = ({ competitorPage }: StateInterface) => {
    const { title, description, isInitialized, account } = competitorPage;

    const first_name = _get(account, ['first_name'], '');
    const last_name = _get(account, ['last_name'], '');
    const s3_filename = _get(account, ['avatar', 's3_filename'], '');
    const name = `${first_name} ${last_name}`;

    return {
        title,
        description,
        isInitialized,
        name,
        s3_filename,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        init(uuid: string) {
            return dispatch(CompetitorPageActions.init(uuid));
        },
        terminate() {
            return dispatch(CompetitorPageActions.terminate());
        },
    };
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Competitor);
