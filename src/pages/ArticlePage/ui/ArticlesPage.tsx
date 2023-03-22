import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';

interface ArticleProps {
className?: string
}
const ArticlesPage = ({ className }:ArticleProps) => (
    <div className={classNames(cls.ArticlesPage, {}, [className])} />
);

export default memo(ArticlesPage);
