import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

interface ArticleProps {
className?: string
}
const ArticlesPage = ({ className }:ArticleProps) => (
    <div className={classNames('', {}, [className])} />
);

export default memo(ArticlesPage);
