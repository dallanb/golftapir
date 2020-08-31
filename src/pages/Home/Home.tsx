import React from 'react';
import { connect } from 'react-redux';
import { AppLayout } from '../../layouts';
import { HomeProps } from './types';
import './Home.scss';

class Home extends React.PureComponent<HomeProps> {
    render() {
        return (
            <AppLayout>
                <h1>Welcome Home</h1>
            </AppLayout>
        );
    }
}

export default connect()(Home);
