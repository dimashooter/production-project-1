import { ArticleCodeBlock } from 'entities/Article/model/types/article';
import { classNames } from 'shared/lib/classNames/classNames';
import { Code } from 'shared/ui/Code/Code';

interface ArticleCodeBlockComponentProps {
className?: string
block:ArticleCodeBlock
}
export const ArticleCodeBlockComponent = ({ className, block }:ArticleCodeBlockComponentProps) => (
    <div className={classNames('', {}, [className])}>
        <Code text={block.code} />
    </div>
);
