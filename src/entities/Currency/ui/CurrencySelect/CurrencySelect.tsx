import { Currency } from 'entities/Currency/Modal/types/currency';
import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';

interface CurrencySelectProps {
className?: string
onChange?:(value:Currency) => void
value?:Currency
readonly?:boolean
}
export const CurrencySelect = memo(({
    className, onChange, value, readonly,
}:CurrencySelectProps) => {
    const { t } = useTranslation();

    const optionList = useMemo(() => (
        [
            { value: 'crn', content: Currency.CRN },
            { value: 'eur', content: Currency.EUR },
            { value: 'usd', content: Currency.USD },
        ]
    ), []);

    const onHandleChange = useCallback((value:string) => {
        onChange?.(value as Currency);
    }, [onChange]);
    return (
        <Select
            // eslint-disable-next-line i18next/no-literal-string
            label={t('choose_currency')}
            options={optionList}
            value={value}
            onChange={onHandleChange}
            readonly={readonly}
        />
    );
});
