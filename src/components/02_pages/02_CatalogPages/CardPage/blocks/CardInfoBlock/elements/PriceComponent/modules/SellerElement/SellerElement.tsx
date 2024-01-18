import React from 'react';
import styles from './SellerElement.module.scss';
import { PriceComponentInterface } from '../../PriceComponent.interface.ts';
import CallIcon from '~svg/contacts/call.svg';

import SellerPhoto from '~img/Team/Person4.jpg';
import Image from 'next/image';

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
        <button className={`${styles.contactButton}`}>
          Заказать звонок
          <span className={styles.contactButton__icon}>
            <CallIcon />
          </span>
        </button>
      </div>
    </div>
  );
};

export { SellerElement };
