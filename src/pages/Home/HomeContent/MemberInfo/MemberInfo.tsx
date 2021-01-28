import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MemberInfoProps } from './types';
import MemberInfoForm from './MemberInfoForm';
import ComponentContent from '@layouts/ComponentContent';
import './MemberInfo.less';
import CONSTANTS from '@locale/en-CA';

const MemberInfo: React.FunctionComponent<MemberInfoProps> = () => {
    const ref = useRef(null);

    return (
        <ComponentContent
            componentRef={ref}
            showSpinner={false}
            className="member-info"
            title={CONSTANTS.PAGES.HOME.MEMBER}
        >
            <MemberInfoForm />
        </ComponentContent>
    );
};

export default MemberInfo;
