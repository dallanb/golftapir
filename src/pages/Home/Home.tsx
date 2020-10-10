import React from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { get as _get } from 'lodash';
import { ContentLayout } from '@layouts';
import { Avatar } from '@components';
import { HomeProps, StateInterface } from './types';
import HomePageActions from './actions';
import './Home.scss';
import { withS3URL } from '@utils';
import { Typography } from 'antd';

class Home extends React.PureComponent<HomeProps> {
    componentDidMount() {
        const { init } = this.props;
        init();
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
            first_name,
            last_name,
            s3_filename,
        } = this.props;
        return (
            <ContentLayout
                title={title}
                subTitle={description}
                showSpinner={!isInitialized}
            >
                <div className="home-page-view">
                    <div className="home-page-user">
                        <Avatar
                            src={s3_filename && withS3URL(s3_filename)}
                            name={`${first_name} ${last_name}`}
                            size={96}
                        />
                        <div className="home-page-user-info">
                            <div className="home-page-user-name">
                                <Typography.Title
                                    level={2}
                                >{`${first_name} ${last_name}`}</Typography.Title>
                            </div>
                            <div>placeholder</div>
                        </div>
                    </div>
                </div>
            </ContentLayout>
        );
    }
}

const mapStateToProps = ({ base, homePage }: StateInterface) => {
    const { me } = base;
    const { title, description, isInitialized } = homePage;

    const { first_name, last_name, avatar } = me;
    const s3_filename = _get(avatar, ['s3_filename'], '');
    return {
        first_name,
        last_name,
        s3_filename,
        title,
        description,
        isInitialized,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        init(uuid: string) {
            return dispatch(HomePageActions.init(uuid));
        },
        terminate() {
            return dispatch(HomePageActions.terminate());
        },
    };
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Home);
