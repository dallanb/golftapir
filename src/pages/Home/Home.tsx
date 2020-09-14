import React from 'react';
import { connect } from 'react-redux';
import { HomeProps } from './types';
import { ContentLayout } from '@layouts';
import './Home.scss';

class Home extends React.PureComponent<HomeProps> {
    render() {
        return (
            <ContentLayout title="Home" subTitle="Home Page">
                <div>Hey Dood</div>
            </ContentLayout>
        );
    }
}

export default connect()(Home);
