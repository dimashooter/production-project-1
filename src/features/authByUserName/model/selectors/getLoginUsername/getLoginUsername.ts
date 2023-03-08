import { StateSchema } from 'app/StoreProvider';

export const getLoginUsername = (state:StateSchema) => state.loginForm?.userName || '';
