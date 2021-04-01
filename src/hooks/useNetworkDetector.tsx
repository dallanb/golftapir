import React, { useEffect, useState } from 'react';
import { notification } from 'antd';

let webPing: any = null;
const useNetworkDetector = () => {
    const [isDisconnected, setIsDisconnected] = useState(false);

    useEffect(() => {
        handleConnectionChange();
        window.addEventListener('online', handleConnectionChange);
        window.addEventListener('offline', handleConnectionChange);
        return () => {
            window.addEventListener('online', handleConnectionChange);
            window.addEventListener('offline', handleConnectionChange);
        };
    }, []);

    useEffect(() => {
        if (!isDisconnected) {
            clearInterval(webPing);
        }
    }, [isDisconnected]);

    const handleConnectionChange = () => {
        const condition = navigator.onLine ? 'online' : 'offline';
        if (condition === 'online') {
            webPing = setInterval(() => {
                fetch('//google.com', {
                    mode: 'no-cors',
                })
                    .then(() => {
                        setIsDisconnected(false);
                    })
                    .catch(() => setIsDisconnected(true));
            }, 2000);
            return;
        }
        return setIsDisconnected(true);
    };

    return isDisconnected;
};

export default useNetworkDetector;
