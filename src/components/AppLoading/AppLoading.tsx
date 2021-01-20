import React from 'react';
import { AppLoadingProps } from './types';
import './AppLoading.less';

const AppLoading: React.FunctionComponent<AppLoadingProps> = () => {
    return (
        <div className="app-spinner">
            <div id="loading" />
            <div className="app-logo" />
        </div>
    );
};
export default AppLoading;
