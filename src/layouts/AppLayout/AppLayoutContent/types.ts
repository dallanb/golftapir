import { ReactNode } from 'react';

export interface AppLayoutContentProps {
    header?: ReactNode;
    content?: ReactNode;
    sider?: ReactNode;
    showSpinner?: boolean;
    className?: string;
}
