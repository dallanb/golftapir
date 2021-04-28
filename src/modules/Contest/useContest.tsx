import React, { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { WebSocketContext } from '@contexts';
import { SocketActions } from '@actions';
import { socketEventHandlers as eventHandler } from './utils';

const useContest: any = (uuid: string) => {
    const dispatch = useDispatch();
    const { contestTopicWs } = useContext(WebSocketContext);
    const [currUUID, setCurrUUID] = useState(uuid);
    useEffect(() => {
        if (currUUID !== uuid) {
            dispatch(SocketActions.terminate(contestTopicWs));
            setCurrUUID(uuid);
        }
    }, [uuid]);

    useEffect(() => {
        if (currUUID) {
            dispatch(
                SocketActions.init(
                    contestTopicWs,
                    { uuid: currUUID },
                    { eventHandler }
                )
            );
        }
    }, [currUUID]);

    useEffect(() => {
        return () => {
            dispatch(SocketActions.terminate(contestTopicWs));
        };
    }, []);

    return;
};

export default useContest;
