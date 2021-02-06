import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { set as _set } from 'lodash';
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
    const dataHeight = Math.min(400, data.length * 50);
    const emptyHeight = 124;
    const dimensions = {};
    if (isInitialized) {
        _set(dimensions, ['height'], dataHeight || emptyHeight);
    }

    return (
        <ComponentContent
            componentRef={ref}
            showSpinner={!isInitialized}
            className="invites space"
            bodyClassName="invites-component-content-body"
            bodyStyle={dimensions}
            title={'Invites'}
        >
            <InvitesList
                containerRef={ref}
                containerDimensions={dimensions}
                data={data}
                metadata={metadata}
                options={options}
                isFetching={isFetching}
            />
        </ComponentContent>
    );
};

export default Invites;
