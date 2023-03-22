import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import {
    fetchProfileData, getProfileError, getProfileLoading, getProfileValidateErrors, profileActions, ProfileCard, profileReducer,
} from 'entities/Profile';
import { getProfileForm } from 'entities/Profile/modal/selector/getProfileForm/getProfileForm';
import { getProfileReadonly } from 'entities/Profile/modal/selector/getProfileReadonly/getProfileReadonly';
import { validateProfileErrors } from 'entities/Profile/modal/types/ProfileSchema';
import { ProfileHeader } from 'entities/Profile/ui/ProfileHeader/ProfileHeader';
import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import DynamicLoaderModule, { ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicLoaderModule';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text, TextTheme } from 'shared/ui/Text/Text';

const reducers:ReducersList = {
    profile: profileReducer,
};
interface ProfileProps {
className?: string
}
const ProfilePage = ({ className }:ProfileProps) => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation('profile');
    const data = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileLoading);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);

    useEffect(() => {
        if (__PROJECT__ === 'storybook') return;
        dispatch(fetchProfileData());
    }, [dispatch]);

    const VALIDATIONS_ARRAY = {
        [validateProfileErrors.INCORRECT_AGE]: t('age_error'),
        [validateProfileErrors.SERVER_ERROR]: t('server_error'),
        [validateProfileErrors.NO_DATA]: t('empty_data'),
        [validateProfileErrors.INCORRECT_USER_DATA]: t('incorrect_error'),
        [validateProfileErrors.INCORRECT_COUNTRY]: t('country_error'),
        [validateProfileErrors.INCORRECT_USERNAME]: t('username_error'),
        [validateProfileErrors.VALID_AGE]: t('invalid_age'),
    };

    const onChangeFirstName = useCallback((value?:string) => {
        dispatch(profileActions.updateProfileData({ first: value || '' }));
    }, [dispatch]);

    const onChangeLastName = useCallback((value?:string) => {
        dispatch(profileActions.updateProfileData({ lastname: value || '' }));
    }, [dispatch]);
    const onChangeCountry = useCallback((value:Country) => {
        dispatch(profileActions.updateProfileData({ country: value || '' }));
    }, [dispatch]);
    const onChangeCity = useCallback((value:string) => {
        dispatch(profileActions.updateProfileData({ city: value || '' }));
    }, [dispatch]);
    const onChangeAge = useCallback((value:string) => {
        dispatch(profileActions.updateProfileData({ age: Number(value || 0) }));
    }, [dispatch]);
    const onChangeAvatar = useCallback((value:string) => {
        dispatch(profileActions.updateProfileData({ avatar: value || '' }));
    }, [dispatch]);
    const onChangeUsername = useCallback((value:string) => {
        dispatch(profileActions.updateProfileData({ username: value || '' }));
    }, [dispatch]);
    const onChangeCurrency = useCallback((value:Currency) => {
        dispatch(profileActions.updateProfileData({ currency: value || '' }));
    }, [dispatch]);

    return (
        <DynamicLoaderModule reducers={reducers} removeAfterUnmounte>
            <ProfileHeader />
            {validateErrors?.length && validateErrors.map((error) => (
                <Text theme={TextTheme.ERROR} title={t(VALIDATIONS_ARRAY[error])} key={error} />
            ))}
            <ProfileCard
                data={data}
                error={error}
                isLoading={isLoading}
                readonly={readonly}
                onChangeFirstName={onChangeFirstName}
                onChangeLastName={onChangeLastName}
                onChangeCountry={onChangeCountry}
                onChangeCity={onChangeCity}
                onChangeAge={onChangeAge}
                onChangeAvatar={onChangeAvatar}
                onChangeUsername={onChangeUsername}
                onChangeCurrency={onChangeCurrency}
            />
        </DynamicLoaderModule>
    );
};

export default ProfilePage;
