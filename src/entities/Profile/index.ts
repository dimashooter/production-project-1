export { Profile, ProfileSchema } from './modal/types/ProfileSchema';

export {
    profileActions, profileReducer,
} from './modal/slices/profileSlice';

export { fetchProfileData } from './services/fetchProfileData/fetchProfileData';
export { ProfileCard } from './ui/ProfileCard';
