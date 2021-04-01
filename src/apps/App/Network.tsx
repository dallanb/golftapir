import React from 'react';
import { NetworkContext } from '@contexts';
import { useNetworkDetector } from '@utils';

const Network: React.FunctionComponent = ({ children }) => {
    const isDisconnected = useNetworkDetector();
    return (
        <NetworkContext.Provider value={{ isDisconnected }}>
            {children}
        </NetworkContext.Provider>
    );
};

export default Network;
