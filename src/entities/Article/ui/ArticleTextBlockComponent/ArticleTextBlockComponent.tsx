import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { ArticleTextBlock } from '../../model/types/article';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
className?: string
block: ArticleTextBlock
}
export const ArticleTextBlockComponent = ({ className, block }:ArticleTextBlockComponentProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ArctileImageBlockComponent, {}, [className])}>
            {block.title && <Text title={block.title} className={cls.title} />}
            {block.paragraphs.map((parpagraph:string) => <Text text={parpagraph} key={parpagraph} className={cls.paragraph} />)}
        </div>
    );
};
