import { StateSchema } from 'app/StoreProvider';

export const getLoginIsLoading = (state:StateSchema) => state.loginForm?.isLoading;
