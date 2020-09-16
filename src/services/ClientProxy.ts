import axios from 'axios';
import qs from 'querystring';
import { set as _set } from 'lodash';
import { setCoreApiHeaders } from './utils';

class ClientProxy {
    private _accessToken: any;

    constructor() {
        this._accessToken = null;
    }

    get accessToken(): any {
        return this._accessToken;
    }

    set accessToken(token: any) {
        this._accessToken = token;
    }

    getUrl = (url: string, endpoint: string, query: any = {}) => {
        const queryString = qs.stringify(query);
        return queryString
            ? `https://${url}${endpoint}?${queryString}`
            : `https://${url}${endpoint}`;
    };

    ajax = async ({
        url,
        method = 'GET',
        data = {},
        headers = {},
    }: {
        url: string;
        method: string;
        data?: any;
        headers: any;
    }) => {
        const options = {
            headers,
            method,
            url,
            withCredentials: true,
        };

        if (this.accessToken) {
            options.headers = {
                ...options.headers,
                Authorization: `Bearer ${this.accessToken}`,
            };
        }

        if (method === 'GET') {
            _set(options, 'params', data);
        } else {
            _set(options, 'data', data);
        }

        // @ts-ignore
        return axios(options)
            .then((response: any) => {
                console.log(url, response);
                const { data: respData } = response;

                return respData.data ? respData.data : respData;
            })
            .catch((err: Error) => {
                throw err;
            });
    };

    get = ({
        url,
        endpoint,
        query = {},
        headers = {},
    }: {
        url: string;
        endpoint: string;
        query?: any;
        headers?: any;
    }) => {
        return this.ajax({
            url: this.getUrl(url, endpoint, query),
            method: 'GET',
            headers: setCoreApiHeaders(headers),
        });
    };

    post = ({
        url,
        endpoint,
        data = {},
        query = {},
        headers = {},
    }: {
        url: string;
        endpoint: string;
        data: any;
        query?: any;
        headers?: any;
    }) => {
        return this.ajax({
            url: this.getUrl(url, endpoint, query),
            method: 'POST',
            data,
            headers: setCoreApiHeaders(headers),
        });
    };

    put = ({
        url,
        endpoint,
        data = {},
        headers = {},
    }: {
        url: string;
        endpoint: string;
        data: any;
        headers?: any;
    }) => {
        return this.ajax({
            url: this.getUrl(url, endpoint),
            method: 'PUT',
            data,
            headers: setCoreApiHeaders(headers),
        });
    };

    del = ({
        url,
        endpoint,
        data = {},
        headers = {},
    }: {
        url: string;
        endpoint: string;
        data: any;
        headers?: any;
    }) => {
        return this.ajax({
            url: this.getUrl(url, endpoint),
            method: 'DELETE',
            data,
            headers: setCoreApiHeaders(headers),
        });
    };
}

export default new ClientProxy();
