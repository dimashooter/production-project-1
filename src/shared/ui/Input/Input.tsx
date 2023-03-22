import {
    ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef,
} from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readonly'>

interface InputProps extends HTMLInputProps{
  className?: string
  value?:string | number,
  type?:string,
  focus?:boolean,
  readonly?:boolean,
  onChange?:(value:string) => void
}
export const Input = memo(({
    className, value, onChange, focus, readonly, type = 'text', ...rest
}:InputProps) => {
    const ref = useRef<HTMLInputElement | null>(null);

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };
    useEffect(() => {
        if (focus) {
            ref?.current?.focus();
        }
    }, [focus]);

    const mods:Mods = {
        [cls.readonly]: readonly,
    };
    return (
        <input
            readOnly={readonly}
            ref={ref}
            type={type}
            value={value}
            onChange={onChangeHandler}
            className={classNames(cls.Input, mods, [className])}
            {...rest}
        />
    );
});
