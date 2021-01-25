import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { get as _get } from 'lodash';
import { VerifyProps } from './types';
import VerifyFormActions from './actions';
import { selectIsInitialized } from './selector';
import { selectIsVerified, selectIsVerifying } from '@selectors/AuthSelectors';
import { withAppRoute } from '@utils';
import routes from '@constants/routes';
import constants from '@constants';
import { Spin } from 'antd';
import './Verify.less';

const Verify: React.FunctionComponent<VerifyProps> = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const search = _get(history, ['location', 'search'], '');
    const params = new URLSearchParams(search);
    const token = params.get('token');
    const isVerifying = useSelector(selectIsVerifying);
    const isVerified = useSelector(selectIsVerified);
    const isInitialized = useSelector(selectIsInitialized);

    useEffect(() => {
        dispatch(VerifyFormActions.init(token));
        return () => {
            dispatch(VerifyFormActions.terminate());
        };
    }, []);

    useEffect(() => {
        if (isVerified) {
            history.push(
                withAppRoute(routes.ROUTES.LOGIN.ROUTE, {
                    app: constants.APPS.AUTH_APP,
                })
            );
        } else if (isVerified === false) {
            // open a modal that allows you to send the verify email again?
        }
    }, [isVerified]);

    if (!isInitialized || isVerifying) return <Spin />;
    return null;
};

export default Verify;
