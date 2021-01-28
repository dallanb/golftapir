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

    const {
        isInitialized,
        isFetching,
        data = [],
        metadata = [],
        options = undefined,
    } = useSelector(selectData);

    const dimensions = {
        height: Math.max(200, data.length * 50 + 63),
    };

    return (
        <ComponentContent
            componentRef={ref}
            showSpinner={!isInitialized}
            className="invites"
            style={dimensions}
            title={'Invites'}
        >
            <InvitesList
                containerRef={ref}
                data={data}
                metadata={metadata}
                options={options}
                isFetching={isFetching}
            />
        </ComponentContent>
    );
};

export default Invites;
