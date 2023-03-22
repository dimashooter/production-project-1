import { ChangeEvent, memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

type SelectOptions = {
    value:string,
    content:string
}

interface SelectProps {
className?: string
label?:string
options:SelectOptions[]
value?:string
onChange?:(value:string) => void
readonly?:boolean
}
export const Select = memo((props:SelectProps) => {
    const {
        className, label, options, value, onChange, readonly,
    } = props;
    const optionList = useMemo(() => (
        options?.map((option) => (
            <option key={option.value} value={option.value} className={cls.option}>{option.content}</option>
        ))
    ), [options]);
    const onChangeHandler = (e:ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };
    return (
        <div className={classNames(cls.Selectwrapper, {}, [className])}>
            {label && <span className={cls.label}>{label}</span>}
            <select className={cls.select} value={value} onChange={onChangeHandler} disabled={readonly}>
                {optionList}
            </select>
        </div>
    );
});
