import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MembersList from './MembersList';
import { MembersProps } from './types';
import MembersPageContentMembersActions from './actions';
import { selectData } from './selector';
import ComponentContent from '@layouts/ComponentContent';
import './Members.less';
import InvitesList from '@pages/Members/MembersSider/MembersSiderContent/MemberActive/Invites/InvitesList';

const Members: React.FunctionComponent<MembersProps> = ({}) => {
    const dispatch = useDispatch();
    const ref = useRef(null);

    useEffect(() => {
        dispatch(MembersPageContentMembersActions.init());
        return () => {
            dispatch(MembersPageContentMembersActions.terminate());
        };
    }, []);

    const {
        isInitialized,
        isRefreshing,
        isFetching,
        data = [],
        metadata = [],
        options = undefined,
    } = useSelector(selectData);

    const dimensions = {
        height: Math.max(200, data.length * 100 + 63),
    };

    return (
        <ComponentContent
            componentRef={ref}
            showSpinner={!isInitialized || isRefreshing}
            className="members"
            style={dimensions}
            title={'Members List'}
        >
            <MembersList
                containerRef={ref}
                data={data}
                metadata={metadata}
                options={options}
                isFetching={isFetching}
            />
        </ComponentContent>
    );
};

export default Members;
