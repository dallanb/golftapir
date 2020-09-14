import React from 'react';
import CreateContestForm from './ContestsCreateForm';
import { ContestsCreateProps } from './types';
import { ContentLayout } from '@layouts';
import './ContestsCreate.scss';

class ContestsCreate extends React.PureComponent<ContestsCreateProps> {
    render() {
        return (
            <ContentLayout title="Contests" subTitle="Create Contests">
                <CreateContestForm />
            </ContentLayout>
        );
    }
}

export default ContestsCreate;
