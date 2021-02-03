import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MemberInfoProps } from './types';
import MemberInfoForm from './MemberInfoForm';
import MemberPageContentMemberInfoActions from './actions';
import { selectIsInitialized } from './selector';
import { selectIsInitialized as selectDataIsInitialized } from '@pages/Member/selector';
import ComponentContent from '@layouts/ComponentContent';
import CONSTANTS from '@locale/en-CA';
import './MemberInfo.less';

const MemberInfo: React.FunctionComponent<MemberInfoProps> = () => {
    const dispatch = useDispatch();
    const ref = useRef(null);
    const isInitialized = useSelector(selectIsInitialized);
    const isDataInitialized = useSelector(selectDataIsInitialized);
    const [isDataInitializing, setIsDataInitializing] = useState(true);

    useEffect(() => {
        return () => {
            dispatch(MemberPageContentMemberInfoActions.terminate());
        };
    }, []);

    useEffect(() => {
        if (isDataInitialized && isDataInitializing) {
            dispatch(MemberPageContentMemberInfoActions.init());
            setIsDataInitializing(false);
        }
    }, [isDataInitialized]);

    return (
        <ComponentContent
            componentRef={ref}
            showSpinner={!isInitialized || !isDataInitialized}
            className="member-info"
            title={CONSTANTS.PAGES.MEMBER.TABS.INFO}
        >
            <MemberInfoForm />
        </ComponentContent>
    );
};

export default MemberInfo;
