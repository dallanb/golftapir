import axios from 'axios';
import { set as _set } from 'lodash';
import { setCoreApiHeaders } from './utils';

class ClientProxy {
    getUrl = (url: string, endpoint: string) => `${url}${endpoint}`;

    ajax = async ({
        url,
        method = 'GET',
        data = {},
        headers = {},
    }: {
        url: string;
        method: string;
        data: any;
        headers: any;
    }) => {
        const options = {
            headers,
            method,
            url,
        };

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
        data = {},
        headers = {},
    }: {
        url: string;
        endpoint: string;
        data: any;
        headers: any;
    }) => {
        return this.ajax({
            url: this.getUrl(url, endpoint),
            method: 'GET',
            data,
            headers: setCoreApiHeaders(headers),
        });
    };

    post = ({
        url,
        endpoint,
        data = {},
        headers = {},
    }: {
        url: string;
        endpoint: string;
        data: any;
        headers: any;
    }) => {
        return this.ajax({
            url: this.getUrl(url, endpoint),
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
        headers: any;
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
        headers: any;
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
