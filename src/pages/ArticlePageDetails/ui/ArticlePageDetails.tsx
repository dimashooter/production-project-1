import { ArticleDetails, fetchArticleById } from 'entities/Article';
import { getArticleDetailsData } from 'entities/Article/model/selectors/getArticleDetailsData/getArticleDetails';
import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

interface ArticleProps {
className?: string
}
const ArticleDetailsPage = ({ className }:ArticleProps) => {
    const { t } = useTranslation('article');
    const { id } = useParams<{id:string}>();
    const data = useSelector(getArticleDetailsData);
    const dispatch = useAppDispatch();

    if (!id) {
        return (
            <div className={classNames('', {}, [className])}>
                {t('Статья не найдена')}
            </div>
        );
    }

    return (

        <div className={classNames('', {}, [className])}>

            <ArticleDetails id={id} />
        </div>
    );
};
export default memo(ArticleDetailsPage);
