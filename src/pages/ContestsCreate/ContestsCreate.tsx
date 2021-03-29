import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppLayoutContent } from '@layouts/AppLayout';
import { ContestsCreateProps } from './types';
import ContestsCreatePageActions from './actions';
import ContestsCreateContent from './ContestsCreateContent';
import ContestsCreateSider from './ContestsCreateSider';
import { selectData } from './selector';
import './ContestsCreate.less';

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
        <AppLayoutContent
            content={<ContestsCreateContent />}
            sider={<ContestsCreateSider />}
            className="contests-create-view"
        />
    );
};

export default ContestsCreate;
