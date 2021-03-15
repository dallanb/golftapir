import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import ContestForm from './ContestForm';
import { ContestProps } from './types';
import ContestUpdatePageContentContestActions from './actions';
import { selectData } from './selector';
import ComponentContent from '@layouts/ComponentContent';
import routes from '@constants/routes';
import { withAppRoute, navigate } from '@utils';
import { OverlaySpin } from '@components';
import { selectIsInitialized as selectIsDataInitialized } from '@pages/ContestUpdate/selector';
import './Contest.less';

const Contest: React.FunctionComponent<ContestProps> = ({}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();
    const isDataInitialized = useSelector(selectIsDataInitialized);
    const { isInitialized, isSubmitting, isSubmitted, uuid } = useSelector(
        selectData
    );
    const [isDataInitializing, setDataIsInitializing] = useState(true);

    useEffect(() => {
        if (isSubmitted && uuid) {
            navigate(
                history,
                withAppRoute(routes.ROUTES.CONTEST.ROUTE, {
                    routeProps: { ...params, contest_uuid: uuid },
                }),
                {
                    uuid,
                }
            );
        }
    });

    useEffect(() => {
        return () => {
            dispatch(ContestUpdatePageContentContestActions.terminate());
        };
    }, []);

    useEffect(() => {
        if (isDataInitialized && isDataInitializing) {
            dispatch(ContestUpdatePageContentContestActions.init());
            setDataIsInitializing(false);
        }
    }, [isDataInitialized]);

    return (
        <ComponentContent
            title="Update Contest"
            showSpinner={!isInitialized}
            className="contest"
        >
            <ContestForm />
            <OverlaySpin visible={isSubmitting} />
        </ComponentContent>
    );
};

export default Contest;
