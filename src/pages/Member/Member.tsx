import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { get as _get } from 'lodash';
import { ContentLayout } from '@layouts';
import { MemberProps } from './types';
import MemberPageActions from './actions';
import MemberContent from './MemberContent';
import MemberSider from './MemberSider';
import { selectData } from './selector';
import './Member.less';

const Member: React.FunctionComponent<MemberProps> = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();
    const member = _get(history, ['location', 'state'], null);
    const memberUUID = _get(params, ['member_uuid'], null);

    useEffect(() => {
        dispatch(MemberPageActions.preInit(member));
        dispatch(MemberPageActions.init(memberUUID));
        return () => {
            dispatch(MemberPageActions.terminate());
        };
    }, []);

    return (
        <ContentLayout
            content={<MemberContent />}
            sider={<MemberSider />}
            className="member-view"
        />
    );
};

export default Member;
