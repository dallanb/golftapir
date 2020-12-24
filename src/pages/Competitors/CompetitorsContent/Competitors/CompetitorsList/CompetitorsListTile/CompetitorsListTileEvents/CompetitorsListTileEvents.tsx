import React from 'react';
import { CompetitorsListTileEventsProps } from './types';
import './CompetitorsListTileEvents.less';

const CompetitorsListTileEvents: React.FunctionComponent<CompetitorsListTileEventsProps> = ({
    events,
}) => (
    <div className="events">
        <div className="events-label">EVENTS</div>
        <div className="events-content">{events}</div>
    </div>
);

export default CompetitorsListTileEvents;
