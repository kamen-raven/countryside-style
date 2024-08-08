import React from 'react';
import Image from 'next/image';
import styles from './AuthorElement.module.scss';
import { AuthorElementInterface } from './AuthorElement.interface.ts';
import { getUserByID } from '~api/Users/getUserByID.tsx';
import LogoIcon from '~svg/logo/logo.svg';

const AuthorElement: React.FC<AuthorElementInterface> = async ({ blogArticleItem }) => {
  if (blogArticleItem.author !== null) {
    const authorData = await getUserByID(blogArticleItem.author);

    return (
      <div className={styles.authorContainer}>
        <Image
          className={styles.authorImage}
          src={authorData.avatars[0].image}
          alt={`${authorData.first_name} ${authorData.last_name}`}
          width={100}
          height={100} />
        <p className={styles.authorName}>
          {authorData.first_name} {authorData.last_name}
        </p>
      </div>
    );

  } else {
    return (
      <div className={styles.authorContainer}>
        <div className={styles.authorImageCommon}>
          <LogoIcon />
        </div>
        <p className={styles.authorName}>
          Загородный стиль
        </p>
      </div>
    );
  }
};

export { AuthorElement };
