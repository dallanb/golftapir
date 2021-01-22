import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InvitesList from './InvitesList';
import { InvitesProps } from './types';
import MembersPageSiderContentInvitesActions from './actions';
import { selectData } from './selector';
import ComponentContent from '@layouts/ComponentContent';
import './Invites.less';

const Invites: React.FunctionComponent<InvitesProps> = ({}) => {
    const dispatch = useDispatch();
    const ref = useRef(null);

    useEffect(() => {
        dispatch(MembersPageSiderContentInvitesActions.init());
        return () => {
            dispatch(MembersPageSiderContentInvitesActions.terminate());
        };
    }, []);

    const { isInitialized } = useSelector(selectData);

    return (
        <ComponentContent
            componentRef={ref}
            showSpinner={!isInitialized}
            className="invites"
        >
            <InvitesList containerRef={ref} />
        </ComponentContent>
    );
};

export default Invites;
