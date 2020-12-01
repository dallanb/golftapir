import React from 'react';
import { get as _get } from 'lodash';

const getRefHeight = (ref?: React.Ref<any>, fallback?: number) =>
    _get(ref, ['current', 'clientHeight'], fallback);

export default getRefHeight;
