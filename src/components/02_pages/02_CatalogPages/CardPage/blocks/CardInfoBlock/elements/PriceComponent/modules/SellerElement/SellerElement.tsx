import React from 'react';
import styles from './SellerElement.module.scss';
import { SellerElementInterface } from './SellerElement.interface.ts';
import CallIcon from '~svg/contacts/call.svg';

import Image from 'next/image';
import { OpenPopupButton } from '~shared/index.ts';

const SellerElement: React.FC<SellerElementInterface> = ({ agentData }) => {



  return (
    <div className={styles.sellerElement}>
      <div className = {styles.sellerPhoto}>
        <Image
        className = {styles.sellerPhoto_img}
        width={120}
        height={120}
        src={agentData.avatars[0].image}
        alt={`${agentData.first_name} ${agentData.last_name}`} />
      </div>

      <div className={styles.sellerContainer}>
        <p className = {styles.name}>
          {agentData.first_name}&nbsp;{agentData.last_name}
        </p>
        <p className = {styles.description}>
          {agentData.job_title}    {/* //? выводить или не выводить? */}
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
