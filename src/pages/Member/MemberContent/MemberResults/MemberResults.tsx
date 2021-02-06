import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MemberResultsList from './MemberResultsList';
import { MemberResultsProps } from './types';
import MemberPageContentMemberResultsActions from './actions';
import { selectData } from './selector';
import ComponentContent from '@layouts/ComponentContent';
import './MemberResults.less';
import CONSTANTS from '@locale/en-CA';

const MemberResults: React.FunctionComponent<MemberResultsProps> = ({}) => {
    const dispatch = useDispatch();
    const ref = useRef(null);

    useEffect(() => {
        dispatch(MemberPageContentMemberResultsActions.init());
        return () => {
            dispatch(MemberPageContentMemberResultsActions.terminate());
        };
    }, []);

    const { isInitialized } = useSelector(selectData);

    return (
        <ComponentContent
            componentRef={ref}
            showSpinner={!isInitialized}
            className="member-results space"
            title={CONSTANTS.PAGES.MEMBER.TABS.RECENT}
        >
            <MemberResultsList containerRef={ref} />
        </ComponentContent>
    );
};

export default MemberResults;
