import React from 'react';

export interface MemberResultsListProps {
    containerRef: React.Ref<any>;
    data: any;
    metadata: any;
    options: any;
    isFetching: boolean;
}
