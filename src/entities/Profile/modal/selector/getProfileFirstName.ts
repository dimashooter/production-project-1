import { StateSchema } from 'app/StoreProvider';
import { Profile } from '../types/ProfileSchema';

export const getProfileUserName = (state:StateSchema) => state.profile?.data?.first || '';
