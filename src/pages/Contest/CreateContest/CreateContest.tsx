import React from 'react';
import CreateContestForm from './components/CreateContestForm';
import { CreateContestProps } from './types';
import { ContentLayout } from '../../../layouts';
import './CreateContest.scss';

class CreateContest extends React.PureComponent<CreateContestProps> {
    render() {
        return (
            <ContentLayout title="Contests" subTitle="Create Contest">
                <CreateContestForm />
            </ContentLayout>
        );
    }
}

export default CreateContest;
