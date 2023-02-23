import { getLoginState } from 'features/authByUserName/model/selectors/getLoginState/getLoginState';
import { LoginByUsername } from 'features/authByUserName/model/services/LoginByUsername/LoginByUsername';
import { LoginActions } from 'features/authByUserName/model/slice/loginSlice';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
className?: string
}
export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();

    const dispatch = useDispatch();

    const {
        isLoading, userName, password, error,
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value) => {
        dispatch(LoginActions.setUsername(value));
    }, [dispatch]);
    const onChangePassword = useCallback((value) => {
        dispatch(LoginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(LoginByUsername({
            username: userName, password,
        }));
    }, [dispatch, password, userName]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Форма авторизации')} />
            {error && <Text theme={TextTheme.ERROR} text={error} />}
            <Input placeholder={t('userName')} focus onChange={onChangeUsername} value={userName} />
            <Input placeholder={t('password')} onChange={onChangePassword} value={password} />
            <Button disabled={isLoading} theme={ButtonTheme.BACKGROUND_INVERTED} onClick={onLoginClick}>{t('Войти')}</Button>
        </div>
    );
});
