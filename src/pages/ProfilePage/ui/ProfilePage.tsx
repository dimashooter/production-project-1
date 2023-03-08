import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import DynamicLoaderModule, { ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicLoaderModule';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

const reducers:ReducersList = {
    profile: profileReducer,
};
interface ProfileProps {
className?: string
}
const ProfilePage = ({ className }:ProfileProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);
    return (
        <DynamicLoaderModule reducers={reducers} removeAfterUnmounte>
            <ProfileCard />
        </DynamicLoaderModule>
    );
};

export default ProfilePage;
