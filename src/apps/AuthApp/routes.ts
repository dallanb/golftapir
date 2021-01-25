import { LoginPageRoutes } from '@pages/Login';
import { RegisterPageRoutes } from '@pages/Register';
import {
    ForgotPasswordPageRoutes,
    LogoutPageRoutes,
    VerifyPageRoutes,
} from '@pages';

export const routes: any = [
    ...ForgotPasswordPageRoutes,
    ...LoginPageRoutes,
    ...RegisterPageRoutes,
    ...LogoutPageRoutes,
    ...VerifyPageRoutes,
];
