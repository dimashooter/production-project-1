import {
    ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps{
  className?: string
  value?:string,
  type?:string,
  focus?:boolean,
  onChange?:(value:string) => void
}
export const Input = memo(({
    className, value, onChange, focus, type = 'text', ...rest
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
    return (
        <input
            ref={ref}
            type={type}
            value={value}
            onChange={onChangeHandler}
            className={classNames(cls.Input, {}, [className])}
            {...rest}
        />
    );
});
