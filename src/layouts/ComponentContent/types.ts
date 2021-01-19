import React, { ReactNode } from 'react';

export interface ComponentContentProps {
    showSpinner?: boolean;
    title?: ReactNode;
    className?: string;
    style?: any;
    componentRef?: React.Ref<any>;
}
