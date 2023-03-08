import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { getProfileLoading } from '../modal/selector/getProfileData/getProfileData';
import { getProfileData } from '../modal/selector/getProfileError/getProfileError';
import { getProfileError } from '../modal/selector/getProfileLoading/getProfileLoading';

interface ProfileCardProps {
className?: string
}
export const ProfileCard = ({ className }:ProfileCardProps) => {
    const data = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileLoading);
    const { t } = useTranslation(['profile']);
    return (

        <div className={classNames({}, [className])}>
            <Text title={t('profile')} />
            <Button theme={ButtonTheme.OUTLINE}>{t('edit')}</Button>
        </div>
    );
};
