import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContentLayout } from '@layouts';
import { ContestsCreateProps } from './types';
import ContestsCreatePageActions from './actions';
import ContestsCreateHeader from './ContestsCreateHeader';
import ContestsCreateContent from './ContestsCreateContent';
import ContestsCreateSider from './ContestsCreateSider';
import { selectData } from './selector';
import './ContestsCreate.scss';

const ContestsCreate: React.FunctionComponent<ContestsCreateProps> = () => {
    const dispatch = useDispatch();

    const { isInitialized } = useSelector(selectData);

    useEffect(() => {
        dispatch(ContestsCreatePageActions.init());
        return () => {
            dispatch(ContestsCreatePageActions.terminate());
        };
    }, []);

    return (
        <ContentLayout
            header={<ContestsCreateHeader />}
            content={<ContestsCreateContent />}
            sider={<ContestsCreateSider />}
            // showSpinner={!isInitialized}
            className="contests-create-view"
        />
    );
};

export default ContestsCreate;
