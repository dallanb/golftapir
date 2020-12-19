import { Ref } from 'react';

export interface BasicInputWrapperProps {
    value: any;
    name: string;
    rules?: any;
    children: any;
    childRef: Ref<any>;
}
