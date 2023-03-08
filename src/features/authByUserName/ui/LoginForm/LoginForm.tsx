import { getLoginError } from 'features/authByUserName/model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from 'features/authByUserName/model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginPassword } from 'features/authByUserName/model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from 'features/authByUserName/model/selectors/getLoginUsername/getLoginUsername';
import { LoginByUsername } from 'features/authByUserName/model/services/LoginByUsername/LoginByUsername';
import { LoginActions, LoginReducer } from 'features/authByUserName/model/slice/loginSlice';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import DynamicLoaderModule, { ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicLoaderModule';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
className?: string,
onSuccess: () => void

}
const initialReducers:ReducersList = {
    loginForm: LoginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    const userName = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);

    const onChangeUsername = useCallback((value) => {
        dispatch(LoginActions.setUsername(value));
    }, [dispatch]);
    const onChangePassword = useCallback((value) => {
        dispatch(LoginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(LoginByUsername({
            username: userName, password,
        }));
        if (result.meta.requestStatus === 'rejected') {
            onSuccess();
        }
        console.log(result);
    }, [dispatch, password, userName, onSuccess]);

    return (
        <DynamicLoaderModule reducers={initialReducers} removeAfterUnmounte>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t('Форма авторизации')} />
                {error && <Text theme={TextTheme.ERROR} text={error} />}
                <Input placeholder={t('userName')} focus onChange={onChangeUsername} value={userName} />
                <Input placeholder={t('password')} onChange={onChangePassword} value={password} />
                <Button disabled={isLoading} theme={ButtonTheme.BACKGROUND_INVERTED} onClick={onLoginClick}>{t('Войти')}</Button>
            </div>
        </DynamicLoaderModule>
    );
});
export default LoginForm;
