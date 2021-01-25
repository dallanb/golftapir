import { LoginPageRoutes } from '@pages/Login';
import { RegisterPageRoutes } from '@pages/Register';
import { LogoutPageRoutes, VerifyPageRoutes } from '@pages';

export const routes: any = [
    ...LoginPageRoutes,
    ...RegisterPageRoutes,
    ...LogoutPageRoutes,
    ...VerifyPageRoutes,
];
