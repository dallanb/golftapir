import { ReactNode } from 'react';

export interface ContentLayoutProps {
    header?: ReactNode;
    content?: ReactNode;
    showSpinner?: boolean;
    className?: string;
}
