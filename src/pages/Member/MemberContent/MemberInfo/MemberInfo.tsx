import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MemberInfoProps } from './types';
import MemberInfoForm from './MemberInfoForm';
import MemberPageContentMemberInfoActions from './actions';
import { selectData } from './selector';
import ComponentContent from '@layouts/ComponentContent';
import './MemberInfo.less';

const MemberInfo: React.FunctionComponent<MemberInfoProps> = () => {
    const dispatch = useDispatch();
    const ref = useRef(null);

    useEffect(() => {
        dispatch(MemberPageContentMemberInfoActions.init());
        return () => {
            dispatch(MemberPageContentMemberInfoActions.terminate());
        };
    }, []);

    const { isInitialized } = useSelector(selectData);
    return (
        <ComponentContent
            componentRef={ref}
            showSpinner={!isInitialized}
            className="member-info"
        >
            <MemberInfoForm />
        </ComponentContent>
    );
};

export default MemberInfo;