import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContentLayout } from '@layouts';
import { MembersCreateProps } from './types';
import MembersCreatePageActions from './actions';
import MembersCreateHeader from './MembersCreateHeader';
import MembersCreateContent from './MembersCreateContent';
import MembersCreateSider from './MembersCreateSider';
import { selectData } from './selector';
import './MembersCreate.less';

const MembersCreate: React.FunctionComponent<MembersCreateProps> = () => {
    const dispatch = useDispatch();

    const { isInitialized } = useSelector(selectData);

    useEffect(() => {
        dispatch(MembersCreatePageActions.init());
        return () => {
            dispatch(MembersCreatePageActions.terminate());
        };
    }, []);

    return (
        <ContentLayout
            header={<MembersCreateHeader />}
            content={<MembersCreateContent />}
            sider={<MembersCreateSider />}
            // showSpinner={!isInitialized}
            className="members-create-view"
        />
    );
};

export default MembersCreate;
