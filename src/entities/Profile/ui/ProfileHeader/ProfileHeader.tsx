import { getProfileReadonly } from 'entities/Profile/modal/selector/getProfileReadonly/getProfileReadonly';
import { profileActions } from 'entities/Profile/modal/slices/profileSlice';
import { updateProfileData } from 'entities/Profile/services/updateProfileData/updateProfileData';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import cls from './ProfileHeader.module.scss';

interface ProfileHeaderProps {
className?: string
}
export const ProfileHeader = ({ className }:ProfileHeaderProps) => {
    const { t } = useTranslation('profile');
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);
    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSaveForm = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);
    return (
        <div className={classNames(cls.profileHeader, {}, [className])}>
            <Text title={t('profile')} className={cls.profileText} />
            {
                readonly
                    ? <Button theme={ButtonTheme.OUTLINE} onClick={onEdit}>{t('edit')}</Button>
                    : (
                        <>
                            <Button theme={ButtonTheme.OUTLINE_RED} onClick={onCancelEdit}>{t('cancel')}</Button>
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                onClick={onSaveForm}
                                className={cls.saveBtn}
                            >
                                {t('save')}

                            </Button>
                        </>
                    )

            }
        </div>

    );
};
