import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import DynamicLoaderModule, { ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicLoaderModule';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import {
    Text, TextAlign, TextSize,
} from 'shared/ui/Text/Text';
import EyeIcon from 'shared/assets/icons/eye.svg';
import CalenderIcon from 'shared/assets/icons/calendar.svg';
import { Icon } from 'shared/ui/Icon/icon';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading }
    from '../../model/selectors/getArticleDetailsData/getArticleDetails';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailReducer } from '../../model/slice/ArticleDetailSlice';
import cls from './ArticleDetail.module.scss';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArctileImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleDetailsProps {
className?: string
id:string
}
const reducer:ReducersList = {
    articleDetails: articleDetailReducer,
};
export const ArticleDetails = memo((props:ArticleDetailsProps) => {
    const { t } = useTranslation('article');
    const { className, id } = props;
    const dispatch = useAppDispatch();
    const article = useSelector(getArticleDetailsData);
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);

    const renderBlock = useCallback((block:ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return <ArticleCodeBlockComponent key={block.id} className={cls.block} block={block} />;
        case ArticleBlockType.IMAGE:
            return <ArctileImageBlockComponent key={block.id} className={cls.block} block={block} />;
        case ArticleBlockType.TEXT:
            return <ArticleTextBlockComponent key={block.id} className={cls.block} block={block} />;
        default:
            return null;
        }
    }, []);

    useEffect(() => {
        dispatch(fetchArticleById(id));
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton className={cls.avatar} border="50%" width={200} height={200} />
                <Skeleton className={cls.title} width={300} height={24} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
            </>
        );
    } else if (error) {
        content = (
            <Text align={TextAlign.CENTER} title={t('error')} />
        );
    } else {
        content = (
            <>
                <div className={cls.avatarWrapper}>

                    <Avatar size={200} src={article?.img} className={cls.avatar} />
                </div>
                <Text size={TextSize.L} title={article?.title} text={article?.subtitle} />
                <div className={cls.articleInfo}>
                    <Icon Svg={EyeIcon} />
                    <Text text={String(article?.views)} />
                </div>
                <div className={cls.articleInfo}>
                    <Icon Svg={CalenderIcon} />

                    <Text text={article?.createdAt} />
                </div>
                {article?.blocks.map(renderBlock)}

            </>
        );
    }
    return (
        <DynamicLoaderModule reducers={reducer} removeAfterUnmounte>
            {content}
        </DynamicLoaderModule>
    );
});
