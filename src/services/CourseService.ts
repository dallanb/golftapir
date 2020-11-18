import ClientProxy from './ClientProxy';
import config from 'config';

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
    searchCourses(query: any = {}) {
        return ClientProxy.get({
            url: config.COURSE_URL,
            endpoint: `/courses/search`,
            query,
        });
    },
};
