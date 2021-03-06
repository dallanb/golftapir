import React, { ReactNode } from 'react';

export interface ComponentContentProps {
    showSpinner?: boolean;
    title?: ReactNode;
    extra?: ReactNode;
    className?: string;
    bodyClassName?: string;
    style?: any;
    bodyStyle?: any;
    componentRef?: React.Ref<any>;
}
