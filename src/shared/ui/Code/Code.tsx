import {
    CSSProperties, ReactNode, useCallback, useMemo, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import CopyIcon from 'shared/assets/icons/copy.svg';
import { relative } from 'path';
import { useTranslation } from 'react-i18next';
import cls from './Code.module.scss';

interface ArticleCodeBlockComponentProps {
className?: string
text:string
}
export const Code = ({ className, text }:ArticleCodeBlockComponentProps) => {
    const { t } = useTranslation('translation');
    const [isCopy, setIsCopy] = useState<boolean>(false);
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
        setIsCopy(true);

        setTimeout(() => setIsCopy(false), 1000);
    }, [text]);

    const spanStyle:CSSProperties = {
        position: 'absolute',
        top: '20px',
        right: '0',
        color: 'white',

    };
    return (
        <div className={classNames(cls.Code, {}, [className])}>
            <pre>
                <Button
                    disabled={isCopy}
                    theme={ButtonTheme.CLEAR}
                    className={cls.CopyBtn}
                    onClick={onCopy}
                >
                    <CopyIcon className={cls.copyIcon} />
                    {isCopy && <span style={spanStyle}>{t('copied')}</span>}
                </Button>
                <code>
                    {text}
                </code>
            </pre>
        </div>
    );
};
