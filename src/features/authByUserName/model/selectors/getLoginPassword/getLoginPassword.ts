import { StateSchema } from 'app/StoreProvider';

export const getLoginPassword = (state:StateSchema) => state.loginForm?.password || '';
