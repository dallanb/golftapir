import React from 'react';

export interface MembersListProps {
    containerRef: React.Ref<any>;
    data: any;
    metadata: any;
    options: any;
    isFetching: boolean;
}
