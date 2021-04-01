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
import { navigate, withAppRoute } from '@utils';
import CONSTANTS from '@locale/en-CA';
import { useSpinner } from '@hooks';
import './Member.less';

const Member: React.FunctionComponent<MemberProps> = ({}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();

    const options = _get(history, ['location', 'state'], undefined);

    const { isSubmitted, isSubmitting, result } = useSelector(selectData);
    useSpinner(isSubmitting);
    useEffect(() => {
        if (isSubmitted && result) {
            navigate(
                history,
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
            title={CONSTANTS.PAGES.MEMBERS_CREATE.FORM.TITLE}
        >
            <MemberForm />
        </ComponentContent>
    );
};

export default Member;
