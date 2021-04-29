import ClientProxy from './ClientProxy';
import config from 'Config';

export default {
    fetchCourse(uuid: string, query: any = {}) {
        return ClientProxy.get({
            url: config.COURSE_URL,
            endpoint: `/courses/${uuid}`,
            query,
        });
    },
    fetchCourses(query: any = {}) {
        return ClientProxy.get({
            url: config.COURSE_URL,
            endpoint: `/courses`,
            query,
        });
    },
    createCourse(data: any = {}) {
        return ClientProxy.post({
            url: config.COURSE_URL,
            endpoint: `/courses`,
            data,
        });
    },
};
