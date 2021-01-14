import { ReactNode, Ref } from 'react';

export interface FloatLabelInputWrapperProps {
    value: any;
    name: string;
    label: ReactNode;
    rules?: any;
    children: any;
    childRef: Ref<any>;
    className?: string;
}
