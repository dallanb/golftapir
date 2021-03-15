import memoize from 'memoize-one';
import { intersectionWith as _intersectionWith } from 'lodash';

export const intersectMembers = memoize((A, B) =>
    _intersectionWith(A, B, (a: any, b: any) => a.uuid === b.member)
);
