import { StateSchema } from 'app/StoreProvider';

export const getUserInited = (state: StateSchema) => state.user._inited;
