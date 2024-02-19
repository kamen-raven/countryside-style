import React from 'react';
import styles from './SellerElement.module.scss';
import { PriceComponentInterface } from '../../PriceComponent.interface.ts';
import CallIcon from '~svg/contacts/call.svg';

import SellerPhoto from '~img/Team/Person4.jpg';
import Image from 'next/image';
import { OpenPopupButton } from '~shared/index.ts';

const SellerElement: React.FC<PriceComponentInterface> = ({ data }) => {



  return (
    <div className={styles.sellerElement}>
      <div className = {styles.sellerPhoto}>
        <Image
        className = {styles.sellerPhoto_img}
        src={SellerPhoto}
        alt={data.seller.manager} />
      </div>

      <div className={styles.sellerContainer}>
        <p className = {styles.name}>
          {data.seller.manager}
        </p>
        <p className = {styles.description}>
          Менеджер проектов
        </p>
        <OpenPopupButton className={`${styles.contactButton}`}
        type={'contactForm'}>
          Заказать звонок
          <span className={styles.contactButton__icon}>
            <CallIcon />
          </span>
        </OpenPopupButton>
      </div>
    </div>
  );
};

export { SellerElement };
