import React, { ReactNode } from 'react';

export interface ComponentContentProps {
    showSpinner?: boolean;
    title?: ReactNode;
    className?: string;
    bodyClassName?: string;
    style?: any;
    bodyStyle?: any;
    componentRef?: React.Ref<any>;
}
