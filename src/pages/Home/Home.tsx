import React from 'react';
import { connect } from 'react-redux';
import { HomeProps } from './types';
import AuthActions from '../../reducers/AuthReducer';
import { ContentLayout } from '../../layouts';
import './Home.scss';

class Home extends React.PureComponent<any> {
    componentDidMount() {
        const { ping } = this.props;
        ping();
    }

    render() {
        return (
            <ContentLayout title="Home" subTitle="Home Page">
                <div>Hey Dood</div>
            </ContentLayout>
        );
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        ping() {
            dispatch(AuthActions.ping());
        },
    };
};

export default connect(null, mapDispatchToProps)(Home);
