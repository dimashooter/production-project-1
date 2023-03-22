import { useMemo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
className?: string
src:string | undefined
alt?:string
size?: number
}
export const Avatar = ({
    className, src, alt = 'avatar', size = 150,
}:AvatarProps) => {
    const mods:Mods = {

    };
    const styles = useMemo(() => ({
        width: size,
        height: size,
    }), [size]);
    return (
        <img src={src} alt={alt} style={styles} className={classNames(cls.Avatar, mods, [className])} />
    );
};
