import { Country } from 'entities/Country/modal/types/Country';
import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';

interface CountrySelectProps {
className?: string
onChange?:(value:Country) => void
value?:Country
readonly?:boolean
}
export const CountrySelect = memo(({
    className, onChange, value, readonly,
}:CountrySelectProps) => {
    const { t } = useTranslation();

    const optionList = useMemo(() => (
        [
            { value: 'czech', content: Country.Czech },
            { value: 'germany', content: Country.Germany },
            { value: 'poland', content: Country.Poland },
            { value: 'ukraine', content: Country.Ukraine },
        ]
    ), []);

    const onHandleChange = useCallback((value:string) => {
        onChange?.(value as Country);
    }, [onChange]);
    return (
        <Select
            // eslint-disable-next-line i18next/no-literal-string
            label={t('choose_country')}
            options={optionList}
            value={value}
            onChange={onHandleChange}
            readonly={readonly}
        />
    );
});
