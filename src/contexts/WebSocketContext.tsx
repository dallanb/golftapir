import React from 'react';

const ws: { contestTopicWs: any; leagueTopicWs: any; notificationWs: any } = {
    contestTopicWs: undefined,
    leagueTopicWs: undefined,
    notificationWs: undefined,
};

const WebSocketContext = React.createContext(ws);
export default WebSocketContext;
