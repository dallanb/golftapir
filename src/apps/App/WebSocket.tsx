import React from 'react';
import { WebSocketContext } from '@contexts';
import {
    WebSocketContestTopicClient,
    WebSocketLeagueTopicClient,
    WebSocketNotificationClient,
} from '@libs';

const WebSocket: React.FunctionComponent = ({ children }) => {
    const notificationWs = WebSocketNotificationClient;
    const contestTopicWs = WebSocketContestTopicClient;
    const leagueTopicWs = WebSocketLeagueTopicClient;
    return (
        <WebSocketContext.Provider
            value={{ contestTopicWs, leagueTopicWs, notificationWs }}
        >
            {children}
        </WebSocketContext.Provider>
    );
};

export default WebSocket;
