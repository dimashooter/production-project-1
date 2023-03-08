import { StateSchema } from 'app/StoreProvider';

export const getLoginError = (state:StateSchema) => state.loginForm?.error;
