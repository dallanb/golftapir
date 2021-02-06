import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { get as _get } from 'lodash';
import MemberForm from './MemberForm';
import { MemberProps } from './types';
import MembersCreatePageContentMemberActions from './actions';
import { selectData } from './selector';
import ComponentContent from '@layouts/ComponentContent';
import routes from '@constants/routes';
import { OverlaySpin } from '@components';
import { withAppRoute } from '@utils';
import './Member.less';

const Member: React.FunctionComponent<MemberProps> = ({}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();

    const options = _get(history, ['location', 'state'], undefined);

    const { isSubmitted, isSubmitting, result } = useSelector(selectData);

    useEffect(() => {
        if (isSubmitted && result) {
            history.push(
                withAppRoute(routes.ROUTES.MEMBERS.ROUTE, {
                    routeProps: {
                        ...params,
                    },
                })
            );
        }
    });

    useEffect(() => {
        dispatch(MembersCreatePageContentMemberActions.init(options));
        return () => {
            dispatch(MembersCreatePageContentMemberActions.terminate());
        };
    }, []);

    const { isInitialized } = useSelector(selectData);

    return (
        <ComponentContent
            showSpinner={!isInitialized}
            className="members-create-member-component-content"
            title={'Invite Member'}
        >
            <MemberForm />
            <OverlaySpin visible={isSubmitting} />
        </ComponentContent>
    );
};

export default Member;
