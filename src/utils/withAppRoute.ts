import { get as _get } from 'lodash';
import withDynamicRoute from "@utils/withDynamicRoute";

const withAppRoute = (route: string, uuid: string, options: any) => {
    if(uuid){

    } else {
        return withDynamicRoute(route, options)
    }
};

export default withAppRoute;
