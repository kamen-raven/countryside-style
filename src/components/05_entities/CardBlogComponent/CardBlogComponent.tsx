import React from 'react';
import Image from 'next/image';

import { CardBlogComponentProps } from './CardBlogComponent.props';
import styles from './CardBlogComponent.module.scss';
import { Button, ArrowsButton } from '~/components/06_shared';

import CommentIcon from '~svg/blog/commentsIcon.svg';


const CardBlogComponent: React.FC<CardBlogComponentProps> = ({ path }) => {

  const page = {
    home: {
      innerBlock: styles.innerBlock_homePage,
      arrows: '',
      blogInfo: styles.blogInfo_none
    },
    blog: {
      innerBlock: styles.innerBlock_blogPage,
      arrows: styles.blogArrows_none,
      blogInfo: styles.blogInfo
    }
  };



  return (
    <div className={`${styles.innerBlock} ${page[path].innerBlock}`}>

      {/* изображение статьи */}
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          src={'https://s3-alpha-sig.figma.com/img/1723/d612/b632410863b75bf5b3be69820d78682e?Expires=1702857600&Signature=AYh~emLV6AL33c2jGNIMexFodi-6s3FHITZTnjdnMaub4~tGlDkOS5YlLSfLDQwTMpqfLVkp9aYv4KKEL389HIG6VHvvGHrFMhsCgbiR33EHT8oSbTjNlPk8dP6igr--D8ztV4cILY3qgzD3AdcbwzPJctuA5Gm6-ZICNYgoIrAQog1pgeuqcB5CAdtMF-PNxMnaelJb9FwCdpjFrvP-HEqGHwSYmiwIazJlSfTTsUQ8hD~h0YXJeJYajF3Yg4Ev-ViV0XrG0GMRetDEugTDKx5Xc~009z9TgZcrL6hjjYdqUqOfAICdF7G~q8uIcRqZFVfKL5HLtnyAERH2plrpGw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}
          alt={''}
          fill={true}
          sizes={'(max-width: 1920px) 100%'}
        />
      </div>

    {/* заголовок статьи */}
      <h3 className={`${styles.blogTitle}`}>
        Топ-3 варианта загородный домов, которые невозможно выгодно продать
      </h3>

    {/* контейнер с разделом количества комментариев и тэгами статьи */}
      <div className={`${styles.blogInfo} ${page[path].blogInfo}`}>
        <div className = {styles.commentsContainer}>
          <CommentIcon className = {styles.commentsIcon}/>
          <p className = {styles.commentsCount}>
            17 комментариев
          </p>
        </div>
        <div className = {styles.tagsContainer}>
          <div className = {styles.tag}>
            #Рынок
          </div>
          <div className = {styles.tag}>
            #Кейсы
          </div>
        </div>
      </div>

    {/* кнопка ПОДРОБНЕЕ для перехода на страницу Блога */}
      <Button appearance={'colored'} className={styles.button}>
        Подробнее
      </Button>

    {/* контейнер со стрелками для ГЛАВНОЙ СТРАНИЦЫ */}
      <ArrowsButton className={`${styles.blogArrows} ${page[path].arrows}`} />

    {/* компонент с кнопкой "ЗАДАТЬ СВОЙ ВОПРОС" */}
      <button className={styles.askYourQuestion}>
        <p className={styles.askYourQuestion__text}>
          Задать свой вопрос
        </p>
        <span className={styles.askYourQuestion__span}>
          ?
        </span>
      </button>

    </div>
  );
};

export { CardBlogComponent };
