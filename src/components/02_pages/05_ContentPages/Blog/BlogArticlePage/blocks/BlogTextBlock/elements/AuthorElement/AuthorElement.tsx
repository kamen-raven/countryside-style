import React from 'react';
import Image from 'next/image';
import styles from './AuthorElement.module.scss';
import { AuthorElementInterface } from './AuthorElement.interface.ts';
import { getUserByID } from '~api/Users/getUserByID.tsx';


const AuthorElement: React.FC<AuthorElementInterface> = async ({ blogArticleItem }) => {
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
};

export { AuthorElement };
