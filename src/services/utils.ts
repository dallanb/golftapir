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
