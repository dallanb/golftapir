import qs from 'querystring';
import { omitBy as _omitBy, isUndefined as _isUndefined } from 'lodash';

export const getFormData = (data: any) => {
    const formData = new FormData();
    Object.keys(data).forEach((key) => formData.append(key, data[key]));
    return formData;
};

export const setCoreApiHeaders = (headers: any) => {
    return {
        ...headers,
        'Access-Control-Allow-Origin': '*',
    };
};

export const cleanQuery = (query: any = {}): string =>
    qs.stringify(_omitBy(query, _isUndefined));
