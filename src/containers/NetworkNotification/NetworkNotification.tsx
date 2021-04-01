import React, { useContext, useEffect } from 'react';
import { notification } from 'antd';
import { NetworkContext } from '@contexts';

const NetworkNotification: React.FunctionComponent = () => {
    const { isDisconnected } = useContext(NetworkContext);

    useEffect(() => {
        if (isDisconnected) {
            notification.error({
                key: 'network',
                message: 'Internet connection lost.',
                duration: 0,
                placement: 'bottomRight',
            });
        } else {
            notification.close('network');
            // TODO: refresh the app?
            // notification.success({
            //     message: 'Internet connection made!',
            //     duration: 3,
            //     placement: 'bottomRight',
            // });
        }
    }, [isDisconnected]);

    return null;
};

export default NetworkNotification;
