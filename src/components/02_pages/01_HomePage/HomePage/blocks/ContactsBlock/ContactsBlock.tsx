import React from 'react';
import { ContactsBlockProps } from './ContactsBlock.props';
import styles from './ContactsBlock.module.scss';

import { AddressElement, HalfScreenTemplate, RequestFormComponent } from '~entities/index';


const ContactsBlock: React.FC<ContactsBlockProps> = ({ generalContactsData }) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.containerInfo}>
        <h2 className={styles.title}>
          Контакты
        </h2>


        <AddressElement addressInfoData={generalContactsData} />


      </div>
      <div className={styles.containerForm}>
        <HalfScreenTemplate conditionColor={"dark"} conditionTemplate={'picFirst'}>
          <div className={styles.wrapperInner}>
            <iframe className={styles.yandexMap} src="https://yandex.ru/map-widget/v1/?um=constructor%3A82d4640cfff3946c64d9620d25ce191b0ca06b56eea9ee8a0ad636757cd19e55&amp;source=constructor" ></iframe>
          </div>
          <div className={styles.wrapperForm}>
            <RequestFormComponent />
          </div>
        </HalfScreenTemplate>
      </div>

      {/*       <div className={styles.containerForm}>
        <div className={styles.wrapperInner}>
          <iframe className={styles.yandexMap} src="https://yandex.ru/map-widget/v1/?um=constructor%3A82d4640cfff3946c64d9620d25ce191b0ca06b56eea9ee8a0ad636757cd19e55&amp;source=constructor" ></iframe>
        </div>
        <div className={styles.wrapperForm}>
          <RequestFormComponent />
        </div>
      </div> */}

    </section>
  );
};

export { ContactsBlock };
