import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MemberInfoProps } from './types';
import MemberInfoForm from './MemberInfoForm';
import ComponentContent from '@layouts/ComponentContent';
import './MemberInfo.less';
import CONSTANTS from '@locale/en-CA';
import { selectMeIsInitialized } from '@selectors/BaseSelector';

const MemberInfo: React.FunctionComponent<MemberInfoProps> = () => {
    const ref = useRef(null);
    const isInitialized = useSelector(selectMeIsInitialized);
    return (
        <ComponentContent
            componentRef={ref}
            showSpinner={!isInitialized}
            className="member-info"
            bodyClassName="member-info-content"
            title={CONSTANTS.PAGES.HOME.MEMBER}
        >
            <MemberInfoForm />
        </ComponentContent>
    );
};

export default MemberInfo;
