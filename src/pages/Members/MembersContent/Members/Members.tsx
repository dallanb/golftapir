import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MembersList from './MembersList';
import { MembersProps } from './types';
import MembersPageContentMembersActions from './actions';
import { selectData } from './selector';
import ComponentContent from '@layouts/ComponentContent';
import './Members.less';

const Members: React.FunctionComponent<MembersProps> = ({}) => {
    const dispatch = useDispatch();
    const ref = useRef(null);

    useEffect(() => {
        dispatch(MembersPageContentMembersActions.init());
        return () => {
            dispatch(MembersPageContentMembersActions.terminate());
        };
    }, []);

    const { isInitialized, isRefreshing } = useSelector(selectData);

    return (
        <ComponentContent
            componentRef={ref}
            showSpinner={!isInitialized || isRefreshing}
            className="members"
        >
            <MembersList containerRef={ref} />
        </ComponentContent>
    );
};

export default Members;
