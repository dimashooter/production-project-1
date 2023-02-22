import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
className?: string
}
export const LoginForm: FC<LoginFormProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input placeholder={t('userName')} focus />
            <Input placeholder={t('password')} />
            <Button theme={ButtonTheme.BACKGROUND_INVERTED}>{t('Войти')}</Button>
        </div>
    );
};
