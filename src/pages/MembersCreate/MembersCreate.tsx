import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppLayoutContent } from '@layouts/AppLayout';
import { MembersCreateProps } from './types';
import MembersCreatePageActions from './actions';
import MembersCreateContent from './MembersCreateContent';
import MembersCreateSider from './MembersCreateSider';
import './MembersCreate.less';

const MembersCreate: React.FunctionComponent<MembersCreateProps> = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(MembersCreatePageActions.init());
        return () => {
            dispatch(MembersCreatePageActions.terminate());
        };
    }, []);

    return (
        <AppLayoutContent
            content={<MembersCreateContent />}
            sider={<MembersCreateSider />}
            className="members-create-view"
        />
    );
};

export default MembersCreate;
