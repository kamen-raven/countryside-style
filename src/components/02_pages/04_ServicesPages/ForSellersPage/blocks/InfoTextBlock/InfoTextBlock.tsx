import React from 'react';
import styles from './InfoTextBlock.module.scss';

import Image from 'next/image';

import AvatarImage from '~img/Team/Petr.jpg';

const InfoTextBlock: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h3 className={styles.title}>
            На вас работают профессионалы высокого класса
          </h3>
          <p className={styles.subtitle}>
            Собираем все данные об&nbsp;объекте.
            Выявляем выгоды, нивелируем недостатки.
            Грамотно представляем недвижимость клиенту.
            Компетентно нейтрализуем все возражения и сомнения.
            Консультируем по&nbsp;всем вопросам, связанным с&nbsp;недвижимостью.
          </p>
        </div>
        <div className={styles.quoteContainer}>
          <div className={styles.innerAuthor}>
            <Image className={styles.authorAvatar}
              src={AvatarImage}
              alt={'Петр Манько'} />
            <p className={styles.authorName}>
              Петр Манько
            </p>
          </div>
          <div className={styles.innerQuote}>
            <p className={styles.quote}>
              «Мы создали агентство по&nbsp;типу престижной адвокатской конторы:
              с&nbsp;клиентами работают только доверенные специалисты,
              никаких новичков, стажёров, просто некомпетентных людей.
              Нас мало, но&nbsp;зато все&nbsp;– эксперты высшей пробы.
              Мы&nbsp;разбираемся в&nbsp;тонкостях строительства и&nbsp;прокладки коммуникаций,
              в&nbsp;юридических и&nbsp;финансовых аспектах, связанных с&nbsp;недвижимостью.
              Мы&nbsp;знаем всё о&nbsp;современных способах рекламы.
              Мы&nbsp;умеем подходить к&nbsp;продаже и&nbsp;мягко, и&nbsp;жёстко,
              если того требует ситуация.
              <span className={styles.quoteSpan}>
                Главное – ваши интересы.
                И&nbsp;все наши возможности открыты для&nbsp;вас».
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { InfoTextBlock };
