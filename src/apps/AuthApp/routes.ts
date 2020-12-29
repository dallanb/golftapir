import { LoginPageRoutes } from '@pages/Login';
import { RegisterPageRoutes } from '@pages/Register';
import { LogoutPageRoutes } from '@pages';

export const routes: any = [
    ...LoginPageRoutes,
    ...RegisterPageRoutes,
    ...LogoutPageRoutes,
];
