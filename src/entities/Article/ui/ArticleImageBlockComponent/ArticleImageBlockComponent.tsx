import { ArticleImageBlock } from 'entities/Article/model/types/article';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArctileImageBlockComponentProps {
className?: string
block:ArticleImageBlock
}
export const ArctileImageBlockComponent = ({ className, block }:ArctileImageBlockComponentProps) => (
    <div className={classNames(cls.ArctileImageBlockComponent, {}, [className])}>
        <img src={block.src} alt={block.title} className={cls.image} />
        {block.title && <Text title={block.title} size={TextSize.M} align={TextAlign.CENTER} />}
    </div>
);
