import React from 'react';
import { connect } from 'react-redux';
import { AppLayout } from '../../layouts';
import { HomeProps } from './types';
import './Home.scss';

class Home extends React.PureComponent<HomeProps> {
    render() {
        return (
            <AppLayout title="Home" subTitle="Welcome back Dallan">
                <div>Hey Dood</div>
            </AppLayout>
        );
    }
}

export default connect()(Home);
