import { StateSchema } from 'app/StoreProvider';

export const getAuthData = (state:StateSchema) => state?.user.authData;
