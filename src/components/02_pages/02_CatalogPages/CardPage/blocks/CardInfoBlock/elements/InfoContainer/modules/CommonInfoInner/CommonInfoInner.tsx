import React from 'react';
import styles from './CommonInfoInner.module.scss';
import { InfoContainerInterface } from '../../InfoContainer.interface';
import useReactMarkdown from '~hooks/useReactMarkdown';


const CommonInfoInner: React.FC<InfoContainerInterface> = ({ data }) => {
  const markdownStyle = {
    p: styles.p,
    strong: styles.strong,
    em: styles.em,
    h1: styles.title,
    h2: styles.h2,
    h3: styles.h3,
    blockquote: styles.blockquote,
    del: styles.del,
    ul: styles.li,
    ol: styles.ol,
    li: styles.listItem,
    a: styles.a,
  };


  return (
    <>
      <h3 className={styles.title}>
        Общая информация
      </h3>

      <>
        {useReactMarkdown(data.object_description, markdownStyle)}
      </>
    </>
  );
};

export { CommonInfoInner };
