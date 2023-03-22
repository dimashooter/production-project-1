import { Country, CountrySelect } from 'entities/Country';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Profile } from 'entities/Profile/modal/types/ProfileSchema';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextTheme } from 'shared/ui/Text/Text';

import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
className?: string
data?:Profile
isLoading?:boolean
error?:string
readonly?:boolean
onChangeLastName?: (value:string) => void
onChangeFirstName?: (value:string) => void
onChangeCity?: (value:string) => void
onChangeAge?: (value:string) => void
onChangeAvatar?: (value:string) => void
onChangeUsername?: (value:string) => void
onChangeCurrency?: (value:Currency) => void
onChangeCountry?: (value:Country) => void
}
export const ProfileCard = ({
    className, data, isLoading, error, readonly, onChangeLastName, onChangeFirstName, onChangeCity, onChangeAge, onChangeAvatar,
    onChangeUsername, onChangeCurrency, onChangeCountry,
}:ProfileCardProps) => {
    const { t } = useTranslation('profile');
    if (isLoading) {
        return (
            <div className={classNames(cls.profileCard, { [cls.loading]: true }, [className])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.profileCard, {}, [className])}>
                <Text theme={TextTheme.ERROR} title={error} />
            </div>
        );
    }
    const mods: Mods = {
        [cls.editing]: !readonly,
    };
    return (

        <div className={classNames(cls.profileCard, mods, [className])}>
            {/* eslint-disable-next-line i18next/no-literal-string */ }
            {data?.avatar && <Avatar src={data?.avatar} alt="avatar" />}
            <div className={classNames(cls.profileInput)}>
                <Text title={t('name')} />
                <Input
                    placeholder={t('name')}
                    value={data?.first}
                    className={classNames(cls.input)}
                    readonly={readonly}
                    onChange={onChangeFirstName}
                />
            </div>
            <div className={classNames(cls.profileInput)}>
                <Text title={t('lastname')} />
                <Input value={data?.lastname} className={classNames(cls.input)} readonly={readonly} onChange={onChangeLastName} />
            </div>

            <div className={classNames(cls.profileInput)}>
                <Text title={t('city')} />
                <Input value={data?.city} className={classNames(cls.input)} readonly={readonly} onChange={onChangeCity} />
            </div>
            <div className={classNames(cls.profileInput)}>
                <Text title={t('avatar')} />
                <Input value={data?.avatar} className={classNames(cls.input)} readonly={readonly} onChange={onChangeAvatar} />
            </div>
            <div className={classNames(cls.profileInput)}>
                <Text title={t('username')} />
                <Input value={data?.username} className={classNames(cls.input)} readonly={readonly} onChange={onChangeUsername} />
            </div>
            <div className={classNames(cls.profileInput)}>
                <Text title={t('age')} />
                <Input
                    value={data?.age}
                    className={classNames(cls.input)}
                    readonly={readonly}
                    onChange={onChangeAge}
                    onKeyPress={(e) => {
                        if (!/[0-9]/.test(e.key)) {
                            e.preventDefault();
                        }
                    }}
                />
            </div>
            <CurrencySelect value={data?.currency} onChange={onChangeCurrency} readonly={readonly} />
            <CountrySelect value={data?.country} onChange={onChangeCountry} readonly={readonly} />
        </div>
    );
};
